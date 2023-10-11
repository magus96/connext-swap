import { createLoggingContext } from "@connext/nxtp-utils";
import { CrossChainMessageProof } from "@eth-optimism/sdk";
import { BigNumber, providers } from "ethers";

import { CrossChainMessenger } from "../../../mockable";
import { NoRootAvailable } from "../errors";
import { getContext } from "../processFromRoot";

import { GetProcessArgsParams } from ".";

export const getProcessFromOptimismRootArgs = async ({
  spokeChainId,
  hubChainId,
  spokeProvider,
  hubProvider,
  sendHash,
  _requestContext,
}: GetProcessArgsParams): Promise<[string, string, string, BigNumber, CrossChainMessageProof]> => {
  const { logger } = getContext();
  const { requestContext, methodContext } = createLoggingContext(getProcessFromOptimismRootArgs.name, _requestContext);
  logger.info("Method start", requestContext, methodContext);
  // When processing from root on optimism, you need the following information:
  //   address _target, -> connector
  //   address _sender, -> mirror connector
  //   bytes memory _message, -> calldata
  //   uint256 _messageNonce, -> ?
  //   L2MessageInclusionProof memory _proof -> taken from sdk

  // create the messenger
  const messenger = new CrossChainMessenger({
    l2ChainId: spokeChainId,
    l2SignerOrProvider: new providers.JsonRpcProvider(spokeProvider),
    l1ChainId: hubChainId,
    l1SignerOrProvider: new providers.JsonRpcProvider(hubProvider),
  });

  // check to make sure you can prove
  const root = await messenger.getMessageStateRoot(sendHash);
  if (!root) {
    throw new NoRootAvailable(spokeChainId, hubChainId, requestContext, methodContext);
  }

  // get the message to get the message nonce
  const [message] = await messenger.getMessagesByTransaction(sendHash);
  logger.info("Got message from optimism", requestContext, methodContext, { message });

  // get the inclusion proof
  const proof = await messenger.getMessageProof(sendHash);
  logger.info("Got proof from optimism", requestContext, methodContext, { proof });

  return [message.target, message.sender, message.message, message.messageNonce, proof];
};
