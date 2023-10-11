import {
  AggregatedRoot,
  chainDataToMap,
  DestinationTransfer,
  mkAddress,
  mkBytes32,
  mock,
  OriginMessage,
  OriginTransfer,
  PropagatedRoot,
  ReceivedAggregateRoot,
  RootMessage,
  RouterBalance,
  StableSwapExchange,
  StableSwapPool,
  XMessage,
  XTransferStatus,
} from "@connext/nxtp-utils";
import { stub, SinonStub, createStubInstance } from "sinon";
import { SubgraphMap } from "../src/lib/entities";
import * as Reader from "../src/reader";
import { SubgraphReader } from "../src/reader";

export const mockChainData = chainDataToMap([
  {
    name: "Rinkeby Testnet",
    chainId: 4,
    domainId: "1111",
    network: "rinkeby",
    assetId: {
      [mkAddress("0x11")]: { symbol: "DAI", decimals: 18 },
      [mkAddress("0x12")]: { symbol: "USDC", decimals: 6 },
    },
  },
  {
    name: "Goerli Testnet",
    chainId: 5,
    domainId: "3331",
    network: "goerli",
    assetId: {
      [mkAddress("0x11")]: { symbol: "DAI", decimals: 18 },
      [mkAddress("0x12")]: { symbol: "USDC", decimals: 6 },
    },
  },
  {
    name: "Local Testnet",
    chainId: 65555,
    domainId: "5555555555555",
    network: "localtest",
    assetId: {
      [mkAddress("0x11")]: { symbol: "DAI", decimals: 18 },
      [mkAddress("0x12")]: { symbol: "USDC", decimals: 6 },
    },
  },
]);
export const mockResponse: Map<string, any[]> = new Map();
mockResponse.set("1337", ["happy1337"]);
mockResponse.set("1338", ["happy1338"]);

const mockMetaData = {
  transferId: mkBytes32("0xaaa"),
  nonce: "0",
  originDomain: "1111",
  destinationDomain: "3331",
};

const mockCallData = {
  to: mkAddress("0x1"),
  callData: "0x",
  callback: mkAddress("0xaaa"),
  callbackFee: "0",
  recovery: mkAddress("0x1"),
  receiveLocal: false,
  slippageTol: "0",
  agent: "foo",
  relayerFee: "1",
};

export const mockOriginTransferEntity = {
  ...mockMetaData,
  ...mockCallData,
  chainId: 4,
  asset: mkAddress("0x11"),
  normalizedIn: "100",
  amount: "100",
  bridgedAsset: mkAddress("0x12"),
  bridgedAmount: "100",
  caller: mkAddress("0x2"),
  txOrigin: mkAddress("0x2"),
  transactionHash: mkBytes32("0xbbb"),
  timestamp: "11111111",
  gasPrice: "10000000000",
  gasLimit: "1000000",
  blockNumber: 5000,
  originMinOut: "123",
  destinationMinOut: "456",
};

export const mockDestinationTransferEntity = {
  ...mockMetaData,
  ...mockCallData,
  chainId: 42,
  status: "Executed",
  routers: [{ id: mkAddress("0x111") }, { id: mkAddress("0x112") }],
  asset: mkAddress("0x11"),
  amount: "100",
  localAsset: mkAddress("0x12"),
  localAmount: "100",
  executedTransactionHash: mkBytes32("0xaaa"),
  originSender: mkAddress("0x13"),
  executedCaller: mkAddress("0x14"),
  executedTxOrigin: mkAddress("0x14"),
  executedTimestamp: "1000000",
  executedGasPrice: "10000000000",
  executedGasLimit: "1000000",
  executedBlockNumber: 5000,
  reconciledCaller: mkAddress("0x15"),
  reconciledTxOrigin: mkAddress("0x15"),
  reconciledTransactionHash: mkBytes32("0xbbb"),
  reconciledTimestamp: "1000000",
  reconciledGasPrice: "10000000000",
  reconciledGasLimit: "1000000",
  reconciledBlockNumber: 5000,
  destinationMinOut: "456",
};

const defaultContext: { config: SubgraphMap } = {
  config: {
    sources: {
      "1111": { domain: "1111", prefix: "rinkeby" },
      "3331": { domain: "3331", prefix: "goerli" },
    },
    supported: { "1111": true, "3331": true, "5555555555555": false },
    assetId: {
      "1111": {
        [mkAddress("0x11")]: { symbol: "DAI", decimals: 18 },
        [mkAddress("0x12")]: { symbol: "USDC", decimals: 6 },
      },
      "3331": {
        [mkAddress("0x11")]: { symbol: "DAI", decimals: 18 },
        [mkAddress("0x12")]: { symbol: "USDC", decimals: 6 },
      },
    },
  },
};
export let mockContext: any;
export let getContextStub: SinonStub;
// Stub getContext to return the mock context above.
export const stubContext = (_context?: { config: SubgraphMap }) => {
  mockContext = _context ?? defaultContext;
  try {
    getContextStub.restore();
  } catch (e) {}
  try {
    getContextStub = stub(Reader, "getContext").callsFake(() => {
      return mockContext;
    });
  } catch (e) {}
  return mockContext;
};

export const mockRootSubgraphResponse = [
  mock.entity.rootMessage() as RootMessage,
  mock.entity.rootMessage() as RootMessage,
];

export const mockOriginMessageSubgraphResponse = [
  mock.entity.originMessage() as OriginMessage,
  mock.entity.originMessage() as OriginMessage,
];

export const mockAggregatedRootSubgraphResponse = [
  mock.entity.aggregatedRoot() as AggregatedRoot,
  mock.entity.aggregatedRoot() as AggregatedRoot,
];

export const mockPropagatedRootSubgraphResponse = [
  mock.entity.propagatedRoot() as PropagatedRoot,
  mock.entity.propagatedRoot() as PropagatedRoot,
];
export const mockReceivedAggregateRootSubgraphResponse = [
  mock.entity.receivedAggregateRoot() as ReceivedAggregateRoot,
  mock.entity.receivedAggregateRoot() as ReceivedAggregateRoot,
];
export const mockXMessageSubgraphResponse = [mock.entity.xMessage() as XMessage, mock.entity.xMessage() as XMessage];

export const mockBlockNumber: Map<string, number> = new Map();
mockBlockNumber.set("2000", 1234567);
mockBlockNumber.set("3000", 1234567);
mockBlockNumber.set("1337", 1234567);
mockBlockNumber.set("1338", 1234567);
mockBlockNumber.set("10", 1234567);

export const mockNoBlockNumber: Map<string, number> = new Map();
mockNoBlockNumber.set("99999", 1234567);

export const mockOriginSubgraphResponse = [
  mock.entity.xtransfer({ originDomain: "1337", destinationDomain: "1338" }) as OriginTransfer,
  mock.entity.xtransfer({ originDomain: "1338", destinationDomain: "1337" }) as OriginTransfer,
];

export const mockDestinationSubgraphResponse = [
  mock.entity.xtransfer({
    originDomain: "1337",
    destinationDomain: "1338",
    status: XTransferStatus.Reconciled,
  }) as DestinationTransfer,
  mock.entity.xtransfer({
    originDomain: "1338",
    destinationDomain: "1337",
    status: XTransferStatus.Reconciled,
  }) as DestinationTransfer,
];

export const mockRouterResponse: RouterBalance[] = [
  { assets: [], router: mkAddress("0xa") },
  {
    assets: [
      {
        adoptedAsset: mkAddress(),
        balance: "123",
        blockNumber: "42",
        canonicalDomain: "1337",
        canonicalId: mkBytes32(),
        domain: "1337",
        feesEarned: "12",
        id: mkBytes32(),
        key: mkBytes32(),
        localAsset: mkAddress(),
      },
    ],
    router: mkBytes32("0xb"),
  },
];

export const mockConnectorMeta = [
  {
    hubDomain: "1337",
  },
];

export const mockStableSwapPoolResponse: StableSwapPool[] = [
  {
    key: mkBytes32("0xb"),
    domain: "1337",
    isActive: true,
    lpToken: mkAddress("0x1"),
    initialA: 2000,
    futureA: 2000,
    initialATime: 0,
    futureATime: 0,
    swapFee: "40000",
    adminFee: "0",
    pooledTokens: [mkAddress("0xa"), mkAddress("0xb")],
    tokenPrecisionMultipliers: ["1", "1"],
    poolTokenDecimals: [18, 18],
    balances: ["200000", "200000"],
    virtualPrice: "400000",
    invariant: "0",
    lpTokenSupply: "0",
  },
];

export const mockStableSwapExchangeResponse: StableSwapExchange[] = [
  {
    id: `${mkBytes32("0xa")}-${mkBytes32("0xb")}-0`,
    domain: "1337",
    poolId: mkBytes32("0xa"),
    buyer: mkAddress("0xa"),
    boughtId: 1,
    soldId: 0,
    tokensSold: 0.4,
    tokensBought: 0.2,
    blockNumber: 37933815,
    timestamp: 1673421076,
    transactionHash: mkBytes32("0xb"),
  },
];

export const mockSubgraph = () =>
  createStubInstance(SubgraphReader, {
    getOriginMessagesByDomain: Promise.resolve(mockOriginMessageSubgraphResponse),
    getSentRootMessagesByDomain: Promise.resolve(mockRootSubgraphResponse),
    getProcessedRootMessagesByDomain: Promise.resolve(mockRootSubgraphResponse),
    getLatestBlockNumber: Promise.resolve(mockBlockNumber),
    getGetAggregatedRootsByDomain: Promise.resolve(mockAggregatedRootSubgraphResponse),
    getGetPropagatedRoots: Promise.resolve(mockPropagatedRootSubgraphResponse),
    getReceivedAggregatedRootsByDomain: Promise.resolve(mockReceivedAggregateRootSubgraphResponse),
    getOriginTransfersByNonce: Promise.resolve(mockOriginSubgraphResponse),
    getDestinationTransfersByNonce: Promise.resolve(mockDestinationSubgraphResponse),
    getDestinationTransfersByDomainAndReconcileTimestamp: Promise.resolve(mockDestinationSubgraphResponse),
    getOriginTransfersById: Promise.resolve(mockOriginSubgraphResponse),
    getDestinationTransfersById: Promise.resolve(mockDestinationSubgraphResponse),
    getAssetBalancesRouters: Promise.resolve(mockRouterResponse),
    getConnectorMeta: Promise.resolve(mockConnectorMeta) as any,
    getRootManagerMeta: Promise.resolve({
      domains: [mock.domain.A, mock.domain.B],
      connectors: [mkAddress("0x1"), mkAddress("0x2")],
      id: "ROOT_MANAGER_META_ID",
    }),
    getStableSwapPools: Promise.resolve(mockStableSwapPoolResponse),
    getStableSwapExchangeByDomainAndTimestamp: Promise.resolve(mockStableSwapExchangeResponse),
  });
