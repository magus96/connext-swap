/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMailbox,
  IMailboxInterface,
} from "../../../../../../../@matterlabs/zksync-contracts/l1/contracts/zksync/interfaces/IMailbox";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expirationBlock",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ergsLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ergsPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerErg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerErg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256[6]",
            name: "reserved",
            type: "uint256[6]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "uint256[]",
            name: "factoryDeps",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct IMailbox.L2CanonicalTransaction",
        name: "transaction",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "factoryDeps",
        type: "bytes[]",
      },
    ],
    name: "NewPriorityRequest",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ergsLimit",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_calldataLength",
        type: "uint32",
      },
    ],
    name: "l2TransactionBaseCost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "l2ShardId",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isService",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "txNumberInBlock",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "value",
            type: "bytes32",
          },
        ],
        internalType: "struct L2Log",
        name: "_log",
        type: "tuple",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "proveL2LogInclusion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "txNumberInBlock",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct L2Message",
        name: "_message",
        type: "tuple",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "proveL2MessageInclusion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddressL2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_l2Value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_ergsLimit",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "_factoryDeps",
        type: "bytes[]",
      },
    ],
    name: "requestL2Transaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2Value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contractAddressL2",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_ergsLimit",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "_factoryDeps",
        type: "bytes[]",
      },
    ],
    name: "serializeL2Transaction",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ergsLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ergsPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerErg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerErg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256[6]",
            name: "reserved",
            type: "uint256[6]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "uint256[]",
            name: "factoryDeps",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        internalType: "struct IMailbox.L2CanonicalTransaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IMailbox__factory {
  static readonly abi = _abi;
  static createInterface(): IMailboxInterface {
    return new utils.Interface(_abi) as IMailboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMailbox {
    return new Contract(address, _abi, signerOrProvider) as IMailbox;
  }
}
