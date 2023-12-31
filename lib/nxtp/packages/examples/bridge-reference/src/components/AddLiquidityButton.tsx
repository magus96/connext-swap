/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from "react";
import { BiMessageError, BiMessageCheck, BiMessageDetail } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";

import { useWallet } from "../contexts/Wallet";
import { useAssets } from "../contexts/Assets";
import { useChains } from "../contexts/Chains";
import { useSdk } from "../contexts/Sdk";
import { useBalances } from "../contexts/Balances";
import { Chain } from "../types/chain";
import { Asset } from "../types/asset";

import { Wallet } from "./Wallet";
import Alert from "./Alert";

type Props = {
  chain: Chain;
  asset: Asset;
  amount: number;
  getBalances: (chain?: Chain) => void;
};

type Response = { status: string; message: string; tx_hash?: string };

export const AddLiquidityButton = ({ chain, asset, amount, getBalances }: Props) => {
  const {
    state: { web3_provider, provider, chain_id },
  } = useWallet();

  const {
    state: { chains },
  } = useChains();
  const {
    state: { assets },
  } = useAssets();

  const {
    state: { sdk },
  } = useSdk();

  const {
    state: { balances },
  } = useBalances();

  const [approving, setApproving] = useState<boolean | null>(null);
  const [approveProcessing, setApproveProcessing] = useState(false);
  const [approveResponse, setApproveResponse] = useState<Response>();

  const [addLiquidity, setAddLiquidity] = useState<Record<any, any>>();
  const [calling, setCalling] = useState(false);
  const [callProcessing, setCallProcessing] = useState(false);
  const [addLiquidityResponse, setAddLiquidityResponse] = useState<Response>();

  const callAddLiquidity = async () => {
    setApproving(null);
    setCalling(true);

    if (sdk) {
      console.log("SDK exists, let's call addLiquidty!");
      const source_chain_data = chains?.find((c) => c?.id === chain?.id);
      const source_asset_data = assets?.find((a) => a?.id === asset?.id);
      const source_contract_data = source_asset_data?.contracts?.find(
        (c) => c?.chain_id === source_chain_data?.chain_id,
      );
      console.log(source_contract_data);
    }

    setCallProcessing(false);
    setCalling(false);
  };

  const reset = () => {
    setAddLiquidity(undefined);

    setApproving(null);
    setApproveProcessing(false);
    setApproveResponse(undefined);

    setCalling(false);
    setCallProcessing(false);
    setAddLiquidityResponse(undefined);

    getBalances(chain);
  };

  const source_contract = asset?.contracts?.find((c) => c?.chain_id === chain?.chain_id);
  const source_balance = balances?.[chain.chain_id]?.find(
    (b) => b?.contract_address === source_contract?.contract_address,
  );
  const source_amount = (source_balance && Number(source_balance.amount)) || 0;

  const min_amount = 0;

  const wrong_chain = chain_id !== chain?.chain_id && !addLiquidity;
  const is_walletconnect = provider?.constructor?.name === "WalletConnectProvider";

  const disabled = calling || Boolean(approving);

  return (
    <>
      {web3_provider && wrong_chain ? (
        web3_provider && wrong_chain ? (
          <Wallet
            connectChainId={chain?.chain_id}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-xl flex items-center justify-center text-white text-base sm:text-lg space-x-1.5 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3"
          >
            <span className="mr-1.5 sm:mr-2">
              {is_walletconnect ? "Reconnect" : "Switch"} to <span className="font-semibold">{chain?.name}</span>{" "}
            </span>
          </Wallet>
        ) : !addLiquidity && (Number(amount) > source_amount || Number(amount) < min_amount || Number(amount) <= 0) ? (
          <Alert
            color="bg-red-400 dark:bg-red-500 text-white text-base"
            icon={<BiMessageError className="w-4 sm:w-6 h-4 sm:h-6 stroke-current mr-3" />}
            closeDisabled={true}
            rounded={true}
            className="rounded-xl p-4.5"
          >
            <span>
              {Number(amount) > source_amount
                ? "Insufficient Balance"
                : Number(amount) < min_amount
                ? "The transfer amount cannot be less than the transfer fee."
                : Number(amount) <= 0
                ? "The transfer amount cannot be equal or less than 0."
                : ""}
            </span>
            <button
              onClick={() => reset()}
              className="bg-red-500 dark:bg-red-400 rounded-full flex items-center justify-center text-white p-1"
            >
              Click me to reset
            </button>
          </Alert>
        ) : !addLiquidity && !addLiquidityResponse ? (
          <button
            disabled={disabled}
            onClick={() => {
              callAddLiquidity();
            }}
            className={`w-full ${
              disabled
                ? "bg-blue-400 dark:bg-blue-500"
                : "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            } rounded-xl flex items-center justify-center text-white text-base sm:text-lg py-3 sm:py-4 px-2 sm:px-3`}
          >
            <span className="flex items-center justify-center space-x-1.5">
              {(calling || approving) && <FaSpinner className="spinner" />}
              <span>
                {calling
                  ? approving
                    ? approveProcessing
                      ? "Approving"
                      : "Please Approve"
                    : callProcessing
                    ? "addLiquiditying"
                    : typeof approving === "boolean"
                    ? "Please Confirm"
                    : "Checking Approval"
                  : "Transfer"}
              </span>
            </span>
          </button>
        ) : (
          (addLiquidityResponse || (!addLiquidity && approveResponse)) &&
          [addLiquidityResponse || approveResponse].map((r, i) => (
            <Alert
              key={i}
              color={`${
                r?.status === "failed"
                  ? "bg-red-400 dark:bg-red-500"
                  : r?.status === "success"
                  ? addLiquidityResponse
                    ? "bg-yellow-400 dark:bg-blue-500"
                    : "bg-green-400 dark:bg-green-500"
                  : "bg-blue-400 dark:bg-blue-500"
              } text-white text-base`}
              icon={
                r?.status === "failed" ? (
                  <BiMessageError className="w-4 sm:w-6 h-4 sm:h-6 stroke-current mr-3" />
                ) : r?.status === "success" ? (
                  addLiquidityResponse ? (
                    <div className="mr-3">
                      <FaSpinner className="spinner" />
                    </div>
                  ) : (
                    <BiMessageCheck className="w-4 sm:w-6 h-4 sm:h-6 stroke-current mr-3" />
                  )
                ) : (
                  <BiMessageDetail className="w-4 sm:w-6 h-4 sm:h-6 stroke-current mr-3" />
                )
              }
              closeDisabled={true}
              rounded={true}
              className="rounded-xl p-4.5"
            >
              <div className="flex items-center justify-between space-x-2">
                <span className="break-all">{r?.message}</span>
                <div className="flex items-center space-x-2"></div>
              </div>
            </Alert>
          ))
        )
      ) : web3_provider ? (
        <button
          disabled={true}
          className="w-full bg-slate-100 dark:bg-slate-900 cursor-not-allowed rounded-xl text-slate-400 dark:text-slate-500 text-base sm:text-lg text-center py-3 sm:py-4 px-2 sm:px-3"
        >
          Add Liquidity
        </button>
      ) : (
        <Wallet
          connectChainId={chain?.chain_id}
          className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-xl text-white text-base sm:text-lg text-center sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3"
        >
          <span>Connect Wallet</span>
        </Wallet>
      )}
    </>
  );
};
