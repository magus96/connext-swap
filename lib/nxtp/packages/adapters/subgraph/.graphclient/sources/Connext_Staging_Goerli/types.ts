// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConnextStagingGoerliTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  staginggoerli_BigDecimal: any;
  BigInt: any;
  staginggoerli_Bytes: any;
};

export type staginggoerli_AggregateRoot = {
  id: Scalars['ID'];
  root: Scalars['staginggoerli_Bytes'];
  blockNumber: Scalars['BigInt'];
};

export type staginggoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_AggregateRoot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_AggregateRoot_filter>>>;
};

export type staginggoerli_AggregateRoot_orderBy =
  | 'id'
  | 'root'
  | 'blockNumber';

export type staginggoerli_Asset = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['staginggoerli_Bytes']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  adoptedAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  localAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: staginggoerli_Router;
  asset: staginggoerli_Asset;
  feesEarned: Scalars['BigInt'];
};

export type staginggoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<staginggoerli_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  feesEarned?: InputMaybe<Scalars['BigInt']>;
  feesEarned_not?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_AssetBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_AssetBalance_filter>>>;
};

export type staginggoerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset'
  | 'feesEarned';

export type staginggoerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_Asset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_Asset_filter>>>;
};

export type staginggoerli_Asset_orderBy =
  | 'id'
  | 'key'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'adoptedAsset'
  | 'localAsset'
  | 'blockNumber';

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type staginggoerli_ConnectorMeta = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  amb?: Maybe<Scalars['staginggoerli_Bytes']>;
  rootManager?: Maybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_ConnectorMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amb?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  amb_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  amb_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  rootManager_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  rootManager_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  mirrorConnector_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  mirrorConnector_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_ConnectorMeta_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_ConnectorMeta_filter>>>;
};

export type staginggoerli_ConnectorMeta_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'amb'
  | 'rootManager'
  | 'mirrorConnector';

export type staginggoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  delegate?: Maybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  asset?: Maybe<staginggoerli_Asset>;
  amount?: Maybe<Scalars['BigInt']>;
  routersFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  executedTxOrigin?: Maybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller?: Maybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledTxOrigin?: Maybe<Scalars['staginggoerli_Bytes']>;
};


export type staginggoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
};

export type staginggoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<staginggoerli_Router_filter>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee?: InputMaybe<Scalars['BigInt']>;
  routersFee_not?: InputMaybe<Scalars['BigInt']>;
  routersFee_gt?: InputMaybe<Scalars['BigInt']>;
  routersFee_lt?: InputMaybe<Scalars['BigInt']>;
  routersFee_gte?: InputMaybe<Scalars['BigInt']>;
  routersFee_lte?: InputMaybe<Scalars['BigInt']>;
  routersFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTxOrigin?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTxOrigin_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTxOrigin_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTxOrigin_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTimestamp?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTxOrigin?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTxOrigin_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTxOrigin_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTxOrigin_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_DestinationTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_DestinationTransfer_filter>>>;
};

export type staginggoerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'routers'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'amount'
  | 'routersFee'
  | 'executedCaller'
  | 'executedTransactionHash'
  | 'executedTimestamp'
  | 'executedGasPrice'
  | 'executedGasLimit'
  | 'executedBlockNumber'
  | 'executedTxOrigin'
  | 'reconciledCaller'
  | 'reconciledTransactionHash'
  | 'reconciledTimestamp'
  | 'reconciledGasPrice'
  | 'reconciledGasLimit'
  | 'reconciledBlockNumber'
  | 'reconciledTxOrigin';

/** Defines the order direction, either ascending or descending */
export type staginggoerli_OrderDirection =
  | 'asc'
  | 'desc';

export type staginggoerli_OriginMessage = {
  id: Scalars['ID'];
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  leaf?: Maybe<Scalars['staginggoerli_Bytes']>;
  index?: Maybe<Scalars['BigInt']>;
  message?: Maybe<Scalars['staginggoerli_Bytes']>;
  root?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  rootCount?: Maybe<staginggoerli_RootCount>;
};

export type staginggoerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  message?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootCount?: InputMaybe<Scalars['String']>;
  rootCount_not?: InputMaybe<Scalars['String']>;
  rootCount_gt?: InputMaybe<Scalars['String']>;
  rootCount_lt?: InputMaybe<Scalars['String']>;
  rootCount_gte?: InputMaybe<Scalars['String']>;
  rootCount_lte?: InputMaybe<Scalars['String']>;
  rootCount_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_contains?: InputMaybe<Scalars['String']>;
  rootCount_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_contains?: InputMaybe<Scalars['String']>;
  rootCount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_?: InputMaybe<staginggoerli_RootCount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_OriginMessage_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_OriginMessage_filter>>>;
};

export type staginggoerli_OriginMessage_orderBy =
  | 'id'
  | 'transferId'
  | 'destinationDomain'
  | 'leaf'
  | 'index'
  | 'message'
  | 'root'
  | 'transactionHash'
  | 'blockNumber'
  | 'rootCount';

export type staginggoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  messageHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  delegate?: Maybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  asset?: Maybe<staginggoerli_Asset>;
  transacting?: Maybe<Scalars['staginggoerli_Bytes']>;
  message?: Maybe<staginggoerli_OriginMessage>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  txOrigin?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  messageHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  messageHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  messageHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  transacting?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transacting_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transacting_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transacting_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_?: InputMaybe<staginggoerli_OriginMessage_filter>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txOrigin?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  txOrigin_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  txOrigin_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  txOrigin_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_OriginTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_OriginTransfer_filter>>>;
};

export type staginggoerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'messageHash'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'transacting'
  | 'message'
  | 'relayerFee'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber'
  | 'txOrigin';

export type staginggoerli_PooledToken = {
  id: Scalars['ID'];
  asset: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_PooledToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_PooledToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_PooledToken_filter>>>;
};

export type staginggoerli_PooledToken_orderBy =
  | 'id'
  | 'asset';

export type Query = {
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_transferRelayerFee?: Maybe<staginggoerli_TransferRelayerFee>;
  staginggoerli_transferRelayerFees: Array<staginggoerli_TransferRelayerFee>;
  staginggoerli_sequencer?: Maybe<staginggoerli_Sequencer>;
  staginggoerli_sequencers: Array<staginggoerli_Sequencer>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  staginggoerli_connectorMeta?: Maybe<staginggoerli_ConnectorMeta>;
  staginggoerli_connectorMetas: Array<staginggoerli_ConnectorMeta>;
  staginggoerli_rootCount?: Maybe<staginggoerli_RootCount>;
  staginggoerli_rootCounts: Array<staginggoerli_RootCount>;
  staginggoerli_rootMessageSent?: Maybe<staginggoerli_RootMessageSent>;
  staginggoerli_rootMessageSents: Array<staginggoerli_RootMessageSent>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_pooledToken?: Maybe<staginggoerli_PooledToken>;
  staginggoerli_pooledTokens: Array<staginggoerli_PooledToken>;
  staginggoerli_stableSwapAddLiquidityEvent?: Maybe<staginggoerli_StableSwapAddLiquidityEvent>;
  staginggoerli_stableSwapAddLiquidityEvents: Array<staginggoerli_StableSwapAddLiquidityEvent>;
  staginggoerli_stableSwapRemoveLiquidityEvent?: Maybe<staginggoerli_StableSwapRemoveLiquidityEvent>;
  staginggoerli_stableSwapRemoveLiquidityEvents: Array<staginggoerli_StableSwapRemoveLiquidityEvent>;
  staginggoerli_stableSwapExchange?: Maybe<staginggoerli_StableSwapExchange>;
  staginggoerli_stableSwapExchanges: Array<staginggoerli_StableSwapExchange>;
  staginggoerli_swapDailyVolume?: Maybe<staginggoerli_SwapDailyVolume>;
  staginggoerli_swapDailyVolumes: Array<staginggoerli_SwapDailyVolume>;
  staginggoerli_swapHourlyVolume?: Maybe<staginggoerli_SwapHourlyVolume>;
  staginggoerli_swapHourlyVolumes: Array<staginggoerli_SwapHourlyVolume>;
  staginggoerli_swapWeeklyVolume?: Maybe<staginggoerli_SwapWeeklyVolume>;
  staginggoerli_swapWeeklyVolumes: Array<staginggoerli_SwapWeeklyVolume>;
  staginggoerli_stableSwapEvent?: Maybe<staginggoerli_StableSwapEvent>;
  staginggoerli_stableSwapEvents: Array<staginggoerli_StableSwapEvent>;
  staginggoerli_swapTradeVolume?: Maybe<staginggoerli_SwapTradeVolume>;
  staginggoerli_swapTradeVolumes: Array<staginggoerli_SwapTradeVolume>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};


export type Querystaginggoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_transferRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_transferRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_TransferRelayerFee_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_TransferRelayerFee_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Sequencer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Sequencer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_ConnectorMeta_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootCount_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootCount_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootMessageSent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_PooledToken_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapExchange_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapDailyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapHourlyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapWeeklyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapTradeVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type staginggoerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_Relayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  relayer?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_Relayer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_Relayer_filter>>>;
};

export type staginggoerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type staginggoerli_RootCount = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_RootCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_RootCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_RootCount_filter>>>;
};

export type staginggoerli_RootCount_orderBy =
  | 'id'
  | 'count';

export type staginggoerli_RootMessageSent = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['staginggoerli_Bytes']>;
  count?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_RootMessageSent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_RootMessageSent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_RootMessageSent_filter>>>;
};

export type staginggoerli_RootMessageSent_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'root'
  | 'count'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type staginggoerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['staginggoerli_Bytes']>;
  recipient?: Maybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['staginggoerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<staginggoerli_AssetBalance>;
};


export type staginggoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
};

export type staginggoerli_Router_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<staginggoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_Router_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_Router_filter>>>;
};

export type staginggoerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type staginggoerli_Sequencer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  sequencer?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_Sequencer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  sequencer?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sequencer_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sequencer_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_Sequencer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_Sequencer_filter>>>;
};

export type staginggoerli_Sequencer_orderBy =
  | 'id'
  | 'isActive'
  | 'sequencer';

export type staginggoerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_Setting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_Setting_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_Setting_filter>>>;
};

export type staginggoerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type staginggoerli_StableSwap = {
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['staginggoerli_Bytes']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  domain?: Maybe<Scalars['BigInt']>;
  swapPool?: Maybe<Scalars['staginggoerli_Bytes']>;
  lpToken?: Maybe<Scalars['staginggoerli_Bytes']>;
  initialA?: Maybe<Scalars['BigInt']>;
  futureA?: Maybe<Scalars['BigInt']>;
  initialATime?: Maybe<Scalars['BigInt']>;
  futureATime?: Maybe<Scalars['BigInt']>;
  swapFee?: Maybe<Scalars['BigInt']>;
  adminFee?: Maybe<Scalars['BigInt']>;
  pooledTokens: Array<staginggoerli_PooledToken>;
  tokenPrecisionMultipliers?: Maybe<Array<Scalars['BigInt']>>;
  balances: Array<Scalars['BigInt']>;
  adminFees?: Maybe<Array<Scalars['BigInt']>>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply?: Maybe<Scalars['BigInt']>;
};


export type staginggoerli_StableSwappooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_PooledToken_filter>;
};

export type staginggoerli_StableSwapAddLiquidityEvent = staginggoerli_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  provider: Scalars['staginggoerli_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees: Array<Scalars['BigInt']>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_StableSwapAddLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  provider?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  tokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_filter>>>;
};

export type staginggoerli_StableSwapAddLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type staginggoerli_StableSwapEvent = {
  stableSwap: staginggoerli_StableSwap;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_StableSwapEvent_filter = {
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapEvent_filter>>>;
};

export type staginggoerli_StableSwapEvent_orderBy =
  | 'stableSwap'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type staginggoerli_StableSwapExchange = {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  buyer: Scalars['staginggoerli_Bytes'];
  boughtId: Scalars['BigInt'];
  tokensBought: Scalars['BigInt'];
  soldId: Scalars['BigInt'];
  tokensSold: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_StableSwapExchange_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  buyer?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  boughtId?: InputMaybe<Scalars['BigInt']>;
  boughtId_not?: InputMaybe<Scalars['BigInt']>;
  boughtId_gt?: InputMaybe<Scalars['BigInt']>;
  boughtId_lt?: InputMaybe<Scalars['BigInt']>;
  boughtId_gte?: InputMaybe<Scalars['BigInt']>;
  boughtId_lte?: InputMaybe<Scalars['BigInt']>;
  boughtId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  boughtId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensBought?: InputMaybe<Scalars['BigInt']>;
  tokensBought_not?: InputMaybe<Scalars['BigInt']>;
  tokensBought_gt?: InputMaybe<Scalars['BigInt']>;
  tokensBought_lt?: InputMaybe<Scalars['BigInt']>;
  tokensBought_gte?: InputMaybe<Scalars['BigInt']>;
  tokensBought_lte?: InputMaybe<Scalars['BigInt']>;
  tokensBought_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensBought_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldId?: InputMaybe<Scalars['BigInt']>;
  soldId_not?: InputMaybe<Scalars['BigInt']>;
  soldId_gt?: InputMaybe<Scalars['BigInt']>;
  soldId_lt?: InputMaybe<Scalars['BigInt']>;
  soldId_gte?: InputMaybe<Scalars['BigInt']>;
  soldId_lte?: InputMaybe<Scalars['BigInt']>;
  soldId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSold?: InputMaybe<Scalars['BigInt']>;
  tokensSold_not?: InputMaybe<Scalars['BigInt']>;
  tokensSold_gt?: InputMaybe<Scalars['BigInt']>;
  tokensSold_lt?: InputMaybe<Scalars['BigInt']>;
  tokensSold_gte?: InputMaybe<Scalars['BigInt']>;
  tokensSold_lte?: InputMaybe<Scalars['BigInt']>;
  tokensSold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapExchange_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapExchange_filter>>>;
};

export type staginggoerli_StableSwapExchange_orderBy =
  | 'id'
  | 'stableSwap'
  | 'buyer'
  | 'boughtId'
  | 'tokensBought'
  | 'soldId'
  | 'tokensSold'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type staginggoerli_StableSwapRemoveLiquidityEvent = staginggoerli_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  provider: Scalars['staginggoerli_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees?: Maybe<Array<Scalars['BigInt']>>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_StableSwapRemoveLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  provider?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  tokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_filter>>>;
};

export type staginggoerli_StableSwapRemoveLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type staginggoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  key?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  lpToken_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  lpToken_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  initialA?: InputMaybe<Scalars['BigInt']>;
  initialA_not?: InputMaybe<Scalars['BigInt']>;
  initialA_gt?: InputMaybe<Scalars['BigInt']>;
  initialA_lt?: InputMaybe<Scalars['BigInt']>;
  initialA_gte?: InputMaybe<Scalars['BigInt']>;
  initialA_lte?: InputMaybe<Scalars['BigInt']>;
  initialA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA?: InputMaybe<Scalars['BigInt']>;
  futureA_not?: InputMaybe<Scalars['BigInt']>;
  futureA_gt?: InputMaybe<Scalars['BigInt']>;
  futureA_lt?: InputMaybe<Scalars['BigInt']>;
  futureA_gte?: InputMaybe<Scalars['BigInt']>;
  futureA_lte?: InputMaybe<Scalars['BigInt']>;
  futureA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime?: InputMaybe<Scalars['BigInt']>;
  initialATime_not?: InputMaybe<Scalars['BigInt']>;
  initialATime_gt?: InputMaybe<Scalars['BigInt']>;
  initialATime_lt?: InputMaybe<Scalars['BigInt']>;
  initialATime_gte?: InputMaybe<Scalars['BigInt']>;
  initialATime_lte?: InputMaybe<Scalars['BigInt']>;
  initialATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime?: InputMaybe<Scalars['BigInt']>;
  futureATime_not?: InputMaybe<Scalars['BigInt']>;
  futureATime_gt?: InputMaybe<Scalars['BigInt']>;
  futureATime_lt?: InputMaybe<Scalars['BigInt']>;
  futureATime_gte?: InputMaybe<Scalars['BigInt']>;
  futureATime_lte?: InputMaybe<Scalars['BigInt']>;
  futureATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee?: InputMaybe<Scalars['BigInt']>;
  swapFee_not?: InputMaybe<Scalars['BigInt']>;
  swapFee_gt?: InputMaybe<Scalars['BigInt']>;
  swapFee_lt?: InputMaybe<Scalars['BigInt']>;
  swapFee_gte?: InputMaybe<Scalars['BigInt']>;
  swapFee_lte?: InputMaybe<Scalars['BigInt']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee?: InputMaybe<Scalars['BigInt']>;
  adminFee_not?: InputMaybe<Scalars['BigInt']>;
  adminFee_gt?: InputMaybe<Scalars['BigInt']>;
  adminFee_lt?: InputMaybe<Scalars['BigInt']>;
  adminFee_gte?: InputMaybe<Scalars['BigInt']>;
  adminFee_lte?: InputMaybe<Scalars['BigInt']>;
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pooledTokens?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_?: InputMaybe<staginggoerli_PooledToken_filter>;
  tokenPrecisionMultipliers?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_StableSwap_filter>>>;
};

export type staginggoerli_StableSwap_orderBy =
  | 'id'
  | 'isActive'
  | 'key'
  | 'canonicalId'
  | 'domain'
  | 'swapPool'
  | 'lpToken'
  | 'initialA'
  | 'futureA'
  | 'initialATime'
  | 'futureATime'
  | 'swapFee'
  | 'adminFee'
  | 'pooledTokens'
  | 'tokenPrecisionMultipliers'
  | 'balances'
  | 'adminFees'
  | 'invariant'
  | 'lpTokenSupply';

export type Subscription = {
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_transferRelayerFee?: Maybe<staginggoerli_TransferRelayerFee>;
  staginggoerli_transferRelayerFees: Array<staginggoerli_TransferRelayerFee>;
  staginggoerli_sequencer?: Maybe<staginggoerli_Sequencer>;
  staginggoerli_sequencers: Array<staginggoerli_Sequencer>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  staginggoerli_connectorMeta?: Maybe<staginggoerli_ConnectorMeta>;
  staginggoerli_connectorMetas: Array<staginggoerli_ConnectorMeta>;
  staginggoerli_rootCount?: Maybe<staginggoerli_RootCount>;
  staginggoerli_rootCounts: Array<staginggoerli_RootCount>;
  staginggoerli_rootMessageSent?: Maybe<staginggoerli_RootMessageSent>;
  staginggoerli_rootMessageSents: Array<staginggoerli_RootMessageSent>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_pooledToken?: Maybe<staginggoerli_PooledToken>;
  staginggoerli_pooledTokens: Array<staginggoerli_PooledToken>;
  staginggoerli_stableSwapAddLiquidityEvent?: Maybe<staginggoerli_StableSwapAddLiquidityEvent>;
  staginggoerli_stableSwapAddLiquidityEvents: Array<staginggoerli_StableSwapAddLiquidityEvent>;
  staginggoerli_stableSwapRemoveLiquidityEvent?: Maybe<staginggoerli_StableSwapRemoveLiquidityEvent>;
  staginggoerli_stableSwapRemoveLiquidityEvents: Array<staginggoerli_StableSwapRemoveLiquidityEvent>;
  staginggoerli_stableSwapExchange?: Maybe<staginggoerli_StableSwapExchange>;
  staginggoerli_stableSwapExchanges: Array<staginggoerli_StableSwapExchange>;
  staginggoerli_swapDailyVolume?: Maybe<staginggoerli_SwapDailyVolume>;
  staginggoerli_swapDailyVolumes: Array<staginggoerli_SwapDailyVolume>;
  staginggoerli_swapHourlyVolume?: Maybe<staginggoerli_SwapHourlyVolume>;
  staginggoerli_swapHourlyVolumes: Array<staginggoerli_SwapHourlyVolume>;
  staginggoerli_swapWeeklyVolume?: Maybe<staginggoerli_SwapWeeklyVolume>;
  staginggoerli_swapWeeklyVolumes: Array<staginggoerli_SwapWeeklyVolume>;
  staginggoerli_stableSwapEvent?: Maybe<staginggoerli_StableSwapEvent>;
  staginggoerli_stableSwapEvents: Array<staginggoerli_StableSwapEvent>;
  staginggoerli_swapTradeVolume?: Maybe<staginggoerli_SwapTradeVolume>;
  staginggoerli_swapTradeVolumes: Array<staginggoerli_SwapTradeVolume>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};


export type Subscriptionstaginggoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_transferRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_transferRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_TransferRelayerFee_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_TransferRelayerFee_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Sequencer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Sequencer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_ConnectorMeta_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootCount_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootCount_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootMessageSent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_PooledToken_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapExchange_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapDailyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapHourlyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapWeeklyVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwapEvent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SwapTradeVolume_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type staginggoerli_SwapDailyVolume = staginggoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['staginggoerli_BigDecimal'];
};

export type staginggoerli_SwapDailyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_SwapDailyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_SwapDailyVolume_filter>>>;
};

export type staginggoerli_SwapDailyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type staginggoerli_SwapHourlyVolume = staginggoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['staginggoerli_BigDecimal'];
};

export type staginggoerli_SwapHourlyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_SwapHourlyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_SwapHourlyVolume_filter>>>;
};

export type staginggoerli_SwapHourlyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type staginggoerli_SwapTradeVolume = {
  stableSwap: staginggoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['staginggoerli_BigDecimal'];
};

export type staginggoerli_SwapTradeVolume_filter = {
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_SwapTradeVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_SwapTradeVolume_filter>>>;
};

export type staginggoerli_SwapTradeVolume_orderBy =
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type staginggoerli_SwapWeeklyVolume = staginggoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: staginggoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['staginggoerli_BigDecimal'];
};

export type staginggoerli_SwapWeeklyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<staginggoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['staginggoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['staginggoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_SwapWeeklyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_SwapWeeklyVolume_filter>>>;
};

export type staginggoerli_SwapWeeklyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type staginggoerli_TransferRelayerFee = {
  id: Scalars['ID'];
  transferId: Scalars['staginggoerli_Bytes'];
  fee?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_TransferRelayerFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<staginggoerli_TransferRelayerFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<staginggoerli_TransferRelayerFee_filter>>>;
};

export type staginggoerli_TransferRelayerFee_orderBy =
  | 'id'
  | 'transferId'
  | 'fee';

export type staginggoerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type staginggoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['staginggoerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type staginggoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: staginggoerli__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  staginggoerli_asset: InContextSdkMethod<Query['staginggoerli_asset'], Querystaginggoerli_assetArgs, MeshContext>,
  /** null **/
  staginggoerli_assets: InContextSdkMethod<Query['staginggoerli_assets'], Querystaginggoerli_assetsArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalance: InContextSdkMethod<Query['staginggoerli_assetBalance'], Querystaginggoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalances: InContextSdkMethod<Query['staginggoerli_assetBalances'], Querystaginggoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  staginggoerli_router: InContextSdkMethod<Query['staginggoerli_router'], Querystaginggoerli_routerArgs, MeshContext>,
  /** null **/
  staginggoerli_routers: InContextSdkMethod<Query['staginggoerli_routers'], Querystaginggoerli_routersArgs, MeshContext>,
  /** null **/
  staginggoerli_setting: InContextSdkMethod<Query['staginggoerli_setting'], Querystaginggoerli_settingArgs, MeshContext>,
  /** null **/
  staginggoerli_settings: InContextSdkMethod<Query['staginggoerli_settings'], Querystaginggoerli_settingsArgs, MeshContext>,
  /** null **/
  staginggoerli_relayer: InContextSdkMethod<Query['staginggoerli_relayer'], Querystaginggoerli_relayerArgs, MeshContext>,
  /** null **/
  staginggoerli_relayers: InContextSdkMethod<Query['staginggoerli_relayers'], Querystaginggoerli_relayersArgs, MeshContext>,
  /** null **/
  staginggoerli_transferRelayerFee: InContextSdkMethod<Query['staginggoerli_transferRelayerFee'], Querystaginggoerli_transferRelayerFeeArgs, MeshContext>,
  /** null **/
  staginggoerli_transferRelayerFees: InContextSdkMethod<Query['staginggoerli_transferRelayerFees'], Querystaginggoerli_transferRelayerFeesArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencer: InContextSdkMethod<Query['staginggoerli_sequencer'], Querystaginggoerli_sequencerArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencers: InContextSdkMethod<Query['staginggoerli_sequencers'], Querystaginggoerli_sequencersArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<Query['staginggoerli_originTransfer'], Querystaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<Query['staginggoerli_originTransfers'], Querystaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<Query['staginggoerli_destinationTransfer'], Querystaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<Query['staginggoerli_destinationTransfers'], Querystaginggoerli_destinationTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessage: InContextSdkMethod<Query['staginggoerli_originMessage'], Querystaginggoerli_originMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessages: InContextSdkMethod<Query['staginggoerli_originMessages'], Querystaginggoerli_originMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoot: InContextSdkMethod<Query['staginggoerli_aggregateRoot'], Querystaginggoerli_aggregateRootArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoots: InContextSdkMethod<Query['staginggoerli_aggregateRoots'], Querystaginggoerli_aggregateRootsArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMeta: InContextSdkMethod<Query['staginggoerli_connectorMeta'], Querystaginggoerli_connectorMetaArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMetas: InContextSdkMethod<Query['staginggoerli_connectorMetas'], Querystaginggoerli_connectorMetasArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCount: InContextSdkMethod<Query['staginggoerli_rootCount'], Querystaginggoerli_rootCountArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCounts: InContextSdkMethod<Query['staginggoerli_rootCounts'], Querystaginggoerli_rootCountsArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSent: InContextSdkMethod<Query['staginggoerli_rootMessageSent'], Querystaginggoerli_rootMessageSentArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSents: InContextSdkMethod<Query['staginggoerli_rootMessageSents'], Querystaginggoerli_rootMessageSentsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwap: InContextSdkMethod<Query['staginggoerli_stableSwap'], Querystaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<Query['staginggoerli_stableSwaps'], Querystaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_pooledToken: InContextSdkMethod<Query['staginggoerli_pooledToken'], Querystaginggoerli_pooledTokenArgs, MeshContext>,
  /** null **/
  staginggoerli_pooledTokens: InContextSdkMethod<Query['staginggoerli_pooledTokens'], Querystaginggoerli_pooledTokensArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapAddLiquidityEvent: InContextSdkMethod<Query['staginggoerli_stableSwapAddLiquidityEvent'], Querystaginggoerli_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapAddLiquidityEvents: InContextSdkMethod<Query['staginggoerli_stableSwapAddLiquidityEvents'], Querystaginggoerli_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Query['staginggoerli_stableSwapRemoveLiquidityEvent'], Querystaginggoerli_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Query['staginggoerli_stableSwapRemoveLiquidityEvents'], Querystaginggoerli_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapExchange: InContextSdkMethod<Query['staginggoerli_stableSwapExchange'], Querystaginggoerli_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapExchanges: InContextSdkMethod<Query['staginggoerli_stableSwapExchanges'], Querystaginggoerli_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapDailyVolume: InContextSdkMethod<Query['staginggoerli_swapDailyVolume'], Querystaginggoerli_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapDailyVolumes: InContextSdkMethod<Query['staginggoerli_swapDailyVolumes'], Querystaginggoerli_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapHourlyVolume: InContextSdkMethod<Query['staginggoerli_swapHourlyVolume'], Querystaginggoerli_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapHourlyVolumes: InContextSdkMethod<Query['staginggoerli_swapHourlyVolumes'], Querystaginggoerli_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapWeeklyVolume: InContextSdkMethod<Query['staginggoerli_swapWeeklyVolume'], Querystaginggoerli_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapWeeklyVolumes: InContextSdkMethod<Query['staginggoerli_swapWeeklyVolumes'], Querystaginggoerli_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapEvent: InContextSdkMethod<Query['staginggoerli_stableSwapEvent'], Querystaginggoerli_stableSwapEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapEvents: InContextSdkMethod<Query['staginggoerli_stableSwapEvents'], Querystaginggoerli_stableSwapEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_swapTradeVolume: InContextSdkMethod<Query['staginggoerli_swapTradeVolume'], Querystaginggoerli_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapTradeVolumes: InContextSdkMethod<Query['staginggoerli_swapTradeVolumes'], Querystaginggoerli_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  staginggoerli__meta: InContextSdkMethod<Query['staginggoerli__meta'], Querystaginggoerli__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  staginggoerli_asset: InContextSdkMethod<Subscription['staginggoerli_asset'], Subscriptionstaginggoerli_assetArgs, MeshContext>,
  /** null **/
  staginggoerli_assets: InContextSdkMethod<Subscription['staginggoerli_assets'], Subscriptionstaginggoerli_assetsArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalance: InContextSdkMethod<Subscription['staginggoerli_assetBalance'], Subscriptionstaginggoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalances: InContextSdkMethod<Subscription['staginggoerli_assetBalances'], Subscriptionstaginggoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  staginggoerli_router: InContextSdkMethod<Subscription['staginggoerli_router'], Subscriptionstaginggoerli_routerArgs, MeshContext>,
  /** null **/
  staginggoerli_routers: InContextSdkMethod<Subscription['staginggoerli_routers'], Subscriptionstaginggoerli_routersArgs, MeshContext>,
  /** null **/
  staginggoerli_setting: InContextSdkMethod<Subscription['staginggoerli_setting'], Subscriptionstaginggoerli_settingArgs, MeshContext>,
  /** null **/
  staginggoerli_settings: InContextSdkMethod<Subscription['staginggoerli_settings'], Subscriptionstaginggoerli_settingsArgs, MeshContext>,
  /** null **/
  staginggoerli_relayer: InContextSdkMethod<Subscription['staginggoerli_relayer'], Subscriptionstaginggoerli_relayerArgs, MeshContext>,
  /** null **/
  staginggoerli_relayers: InContextSdkMethod<Subscription['staginggoerli_relayers'], Subscriptionstaginggoerli_relayersArgs, MeshContext>,
  /** null **/
  staginggoerli_transferRelayerFee: InContextSdkMethod<Subscription['staginggoerli_transferRelayerFee'], Subscriptionstaginggoerli_transferRelayerFeeArgs, MeshContext>,
  /** null **/
  staginggoerli_transferRelayerFees: InContextSdkMethod<Subscription['staginggoerli_transferRelayerFees'], Subscriptionstaginggoerli_transferRelayerFeesArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencer: InContextSdkMethod<Subscription['staginggoerli_sequencer'], Subscriptionstaginggoerli_sequencerArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencers: InContextSdkMethod<Subscription['staginggoerli_sequencers'], Subscriptionstaginggoerli_sequencersArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<Subscription['staginggoerli_originTransfer'], Subscriptionstaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<Subscription['staginggoerli_originTransfers'], Subscriptionstaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<Subscription['staginggoerli_destinationTransfer'], Subscriptionstaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<Subscription['staginggoerli_destinationTransfers'], Subscriptionstaginggoerli_destinationTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessage: InContextSdkMethod<Subscription['staginggoerli_originMessage'], Subscriptionstaginggoerli_originMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessages: InContextSdkMethod<Subscription['staginggoerli_originMessages'], Subscriptionstaginggoerli_originMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoot: InContextSdkMethod<Subscription['staginggoerli_aggregateRoot'], Subscriptionstaginggoerli_aggregateRootArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoots: InContextSdkMethod<Subscription['staginggoerli_aggregateRoots'], Subscriptionstaginggoerli_aggregateRootsArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMeta: InContextSdkMethod<Subscription['staginggoerli_connectorMeta'], Subscriptionstaginggoerli_connectorMetaArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMetas: InContextSdkMethod<Subscription['staginggoerli_connectorMetas'], Subscriptionstaginggoerli_connectorMetasArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCount: InContextSdkMethod<Subscription['staginggoerli_rootCount'], Subscriptionstaginggoerli_rootCountArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCounts: InContextSdkMethod<Subscription['staginggoerli_rootCounts'], Subscriptionstaginggoerli_rootCountsArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSent: InContextSdkMethod<Subscription['staginggoerli_rootMessageSent'], Subscriptionstaginggoerli_rootMessageSentArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSents: InContextSdkMethod<Subscription['staginggoerli_rootMessageSents'], Subscriptionstaginggoerli_rootMessageSentsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwap: InContextSdkMethod<Subscription['staginggoerli_stableSwap'], Subscriptionstaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<Subscription['staginggoerli_stableSwaps'], Subscriptionstaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_pooledToken: InContextSdkMethod<Subscription['staginggoerli_pooledToken'], Subscriptionstaginggoerli_pooledTokenArgs, MeshContext>,
  /** null **/
  staginggoerli_pooledTokens: InContextSdkMethod<Subscription['staginggoerli_pooledTokens'], Subscriptionstaginggoerli_pooledTokensArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapAddLiquidityEvent: InContextSdkMethod<Subscription['staginggoerli_stableSwapAddLiquidityEvent'], Subscriptionstaginggoerli_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapAddLiquidityEvents: InContextSdkMethod<Subscription['staginggoerli_stableSwapAddLiquidityEvents'], Subscriptionstaginggoerli_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Subscription['staginggoerli_stableSwapRemoveLiquidityEvent'], Subscriptionstaginggoerli_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Subscription['staginggoerli_stableSwapRemoveLiquidityEvents'], Subscriptionstaginggoerli_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapExchange: InContextSdkMethod<Subscription['staginggoerli_stableSwapExchange'], Subscriptionstaginggoerli_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapExchanges: InContextSdkMethod<Subscription['staginggoerli_stableSwapExchanges'], Subscriptionstaginggoerli_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapDailyVolume: InContextSdkMethod<Subscription['staginggoerli_swapDailyVolume'], Subscriptionstaginggoerli_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapDailyVolumes: InContextSdkMethod<Subscription['staginggoerli_swapDailyVolumes'], Subscriptionstaginggoerli_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapHourlyVolume: InContextSdkMethod<Subscription['staginggoerli_swapHourlyVolume'], Subscriptionstaginggoerli_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapHourlyVolumes: InContextSdkMethod<Subscription['staginggoerli_swapHourlyVolumes'], Subscriptionstaginggoerli_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_swapWeeklyVolume: InContextSdkMethod<Subscription['staginggoerli_swapWeeklyVolume'], Subscriptionstaginggoerli_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapWeeklyVolumes: InContextSdkMethod<Subscription['staginggoerli_swapWeeklyVolumes'], Subscriptionstaginggoerli_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapEvent: InContextSdkMethod<Subscription['staginggoerli_stableSwapEvent'], Subscriptionstaginggoerli_stableSwapEventArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwapEvents: InContextSdkMethod<Subscription['staginggoerli_stableSwapEvents'], Subscriptionstaginggoerli_stableSwapEventsArgs, MeshContext>,
  /** null **/
  staginggoerli_swapTradeVolume: InContextSdkMethod<Subscription['staginggoerli_swapTradeVolume'], Subscriptionstaginggoerli_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  staginggoerli_swapTradeVolumes: InContextSdkMethod<Subscription['staginggoerli_swapTradeVolumes'], Subscriptionstaginggoerli_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  staginggoerli__meta: InContextSdkMethod<Subscription['staginggoerli__meta'], Subscriptionstaginggoerli__metaArgs, MeshContext>
  };

  export type Context = {
      ["Connext_Staging_Goerli"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
