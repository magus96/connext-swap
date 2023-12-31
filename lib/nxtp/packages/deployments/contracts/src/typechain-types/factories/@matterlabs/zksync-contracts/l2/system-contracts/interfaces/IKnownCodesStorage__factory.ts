/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKnownCodesStorage,
  IKnownCodesStorageInterface,
} from "../../../../../../@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IKnownCodesStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "sendBytecodeToL1",
        type: "bool",
      },
    ],
    name: "MarkedAsKnown",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "getMarker",
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
        internalType: "bool",
        name: "_shouldSendToL1",
        type: "bool",
      },
      {
        internalType: "bytes32[]",
        name: "_hashes",
        type: "bytes32[]",
      },
    ],
    name: "markFactoryDeps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IKnownCodesStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IKnownCodesStorageInterface {
    return new utils.Interface(_abi) as IKnownCodesStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKnownCodesStorage {
    return new Contract(address, _abi, signerOrProvider) as IKnownCodesStorage;
  }
}
