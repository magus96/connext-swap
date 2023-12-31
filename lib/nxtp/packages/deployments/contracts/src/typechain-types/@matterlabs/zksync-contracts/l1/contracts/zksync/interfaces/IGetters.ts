/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export declare namespace IGetters {
  export type FacetStruct = {
    addr: PromiseOrValue<string>;
    selectors: PromiseOrValue<BytesLike>[];
  };

  export type FacetStructOutput = [string, string[]] & {
    addr: string;
    selectors: string[];
  };
}

export interface IGettersInterface extends utils.Interface {
  functions: {
    "facetAddress(bytes4)": FunctionFragment;
    "facetAddresses()": FunctionFragment;
    "facetFunctionSelectors(address)": FunctionFragment;
    "facets()": FunctionFragment;
    "getFirstUnprocessedPriorityTx()": FunctionFragment;
    "getGovernor()": FunctionFragment;
    "getTotalBlocksCommitted()": FunctionFragment;
    "getTotalBlocksExecuted()": FunctionFragment;
    "getTotalBlocksVerified()": FunctionFragment;
    "getTotalPriorityTxs()": FunctionFragment;
    "getVerifier()": FunctionFragment;
    "isFacetFreezable(address)": FunctionFragment;
    "isFunctionFreezable(bytes4)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "l2LogsRootHash(uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "facetAddress"
      | "facetAddresses"
      | "facetFunctionSelectors"
      | "facets"
      | "getFirstUnprocessedPriorityTx"
      | "getGovernor"
      | "getTotalBlocksCommitted"
      | "getTotalBlocksExecuted"
      | "getTotalBlocksVerified"
      | "getTotalPriorityTxs"
      | "getVerifier"
      | "isFacetFreezable"
      | "isFunctionFreezable"
      | "isValidator"
      | "l2LogsRootHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFirstUnprocessedPriorityTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksCommitted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksExecuted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksVerified",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPriorityTxs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isFacetFreezable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isFunctionFreezable",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2LogsRootHash",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFirstUnprocessedPriorityTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksCommitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPriorityTxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFacetFreezable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFunctionFreezable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2LogsRootHash",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGetters extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGettersInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    facetAddress(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { facet: string }>;

    facetAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { facets: string[] }>;

    facetFunctionSelectors(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    facets(overrides?: CallOverrides): Promise<[IGetters.FacetStructOutput[]]>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGovernor(overrides?: CallOverrides): Promise<[string]>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVerifier(overrides?: CallOverrides): Promise<[string]>;

    isFacetFreezable(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFunctionFreezable(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    l2LogsRootHash(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;
  };

  facetAddress(
    _selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  facetAddresses(overrides?: CallOverrides): Promise<string[]>;

  facetFunctionSelectors(
    _facet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  facets(overrides?: CallOverrides): Promise<IGetters.FacetStructOutput[]>;

  getFirstUnprocessedPriorityTx(overrides?: CallOverrides): Promise<BigNumber>;

  getGovernor(overrides?: CallOverrides): Promise<string>;

  getTotalBlocksCommitted(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBlocksExecuted(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBlocksVerified(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

  getVerifier(overrides?: CallOverrides): Promise<string>;

  isFacetFreezable(
    _facet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isFunctionFreezable(
    _selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidator(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  l2LogsRootHash(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    facetAddress(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    facetAddresses(overrides?: CallOverrides): Promise<string[]>;

    facetFunctionSelectors(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    facets(overrides?: CallOverrides): Promise<IGetters.FacetStructOutput[]>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGovernor(overrides?: CallOverrides): Promise<string>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<string>;

    isFacetFreezable(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFunctionFreezable(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    l2LogsRootHash(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    facetAddress(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    facetFunctionSelectors(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facets(overrides?: CallOverrides): Promise<BigNumber>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    isFacetFreezable(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFunctionFreezable(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2LogsRootHash(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    facetAddress(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    facetFunctionSelectors(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalBlocksCommitted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBlocksExecuted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBlocksVerified(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPriorityTxs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isFacetFreezable(
      _facet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFunctionFreezable(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l2LogsRootHash(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
