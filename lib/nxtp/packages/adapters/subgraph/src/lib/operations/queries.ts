import { gql } from "graphql-request";
import {
  SubgraphQueryMetaParams,
  SubgraphQueryByTransferIDsMetaParams,
  SubgraphQueryByTimestampMetaParams,
} from "@connext/nxtp-utils";

import { getContext } from "../../reader";

export const ASSET_ENTITY = `
      id,
      key,
      canonicalId,
      canonicalDomain,
      adoptedAsset,
      localAsset,
      blockNumber,
`;

export const ASSET_BALANCE_ENTITY = `
    id
    amount
    feesEarned

    # Asset
    asset {
      ${ASSET_ENTITY}
    }
`;

export const ORIGIN_MESSAGE_ENTITY = `
      id
      leaf
      index
      root
      transferId
      destinationDomain
      transactionHash
      message
`;
export const DESTINATION_MESSAGE_ENTITY = `
      id
      leaf
      processed
      returnData
`;
export const ORIGIN_TRANSFER_ENTITY = `
      id
      chainId
      transferId
      nonce
      status
      messageHash
    
      # TransferInfo
      originDomain
      destinationDomain
      canonicalDomain
      to
      delegate
      receiveLocal
      callData
      slippage
      originSender
      bridgedAmt
      normalizedIn
      canonicalId
    
      # Asset
      asset {
        ${ASSET_ENTITY}
      }

      # Message
      message { 
        ${ORIGIN_MESSAGE_ENTITY}
      }

      # relayerFee
      relayerFee

      # XCalled Transaction
      caller
      transactionHash
      timestamp
      gasPrice
      gasLimit
      blockNumber
      txOrigin
`;

export const DESTINATION_TRANSFER_ENTITY = `
      id

      # Meta
      chainId
      transferId
      nonce
      status
      routers {
        id
      }

      # TransferInfo
      originDomain
      destinationDomain
      canonicalDomain
      to
      delegate
      receiveLocal
      callData
      slippage
      originSender
      bridgedAmt
      amount
      normalizedIn
      canonicalId

      # Asset
      asset {
        ${ASSET_ENTITY}
      }

      # Executed Transaction
      executedCaller
      executedTransactionHash
      executedTimestamp
      executedGasPrice
      executedGasLimit
      executedBlockNumber
      executedTxOrigin

      # Reconciled Transaction
      reconciledCaller
      reconciledTransactionHash
      reconciledTimestamp
      reconciledGasPrice
      reconciledGasLimit
      reconciledBlockNumber
      reconciledTxOrigin
`;

export const BLOCK_NUMBER_ENTITY = `
      block {
        number
      }
`;
export const ROOT_MESSAGE_SENT_ENTITY = `
      id
      spokeDomain
      hubDomain
      root
      caller
      transactionHash
      timestamp
      gasPrice
      gasLimit
      blockNumber
      count
`;
export const ROOT_MESSAGE_PROCESSED_ENTITY = `
      id
      spokeDomain
      hubDomain
      root
      caller
      transactionHash
      timestamp
      gasPrice
      gasLimit
      blockNumber
`;
export const ROOT_AGGREGATED_ENTITY = `
      id
      domain
      receivedRoot
      index
`;
export const ROOT_PROPAGATED_ENTITY = `
      id
      aggregate
      domainsHash
      count
`;
export const RECEIVED_AGGREGATED_ROOT_ENTITY = `
      id
      root
      blockNumber
`;

export const CONNECTOR_META_ENTITY = `
      amb
      hubDomain
      id
      mirrorConnector
      rootManager
      spokeDomain
`;

export const ROOT_MANAGER_META_ENTITY = `
      id
      connectors
      domains
`;

export const STABLESWAP_POOL_ENTITY = `
      key
      isActive
      lpToken
      initialA
      futureA
      initialATime
      futureATime
      swapFee
      adminFee
      pooledTokens
      tokenPrecisionMultipliers
      balances
      virtualPrice
      invariant
      lpTokenSupply
`;

export const STABLESWAP_EXCHANGE_ENTITY = `
      id
      stableSwap {
        key
        tokenPrecisionMultipliers
        pooledTokens
      }
      buyer
      boughtId
      soldId
      tokensBought
      tokensSold
      block
      timestamp
      transaction
`;

const lastedBlockNumberQuery = (prefix: string): string => {
  return `${prefix}__meta { ${BLOCK_NUMBER_ENTITY}}`;
};
export const getLastestBlockNumberQuery = (prefixes: string[]): string => {
  let combinedQuery = "";
  for (const prefix of prefixes) {
    combinedQuery += lastedBlockNumberQuery(prefix);
  }

  return gql`    
    query GetBlockNumber { 
      ${combinedQuery}
  }`;
};

const maxRoutersPerTransferQuery = (prefix: string): string => {
  return `${prefix}_setting (id: "1") {maxRoutersPerTransfer}`;
};
export const getMaxRoutersPerTransferQuery = (prefixes: string[]): string => {
  let combinedQuery = "";
  for (const prefix of prefixes) {
    combinedQuery += maxRoutersPerTransferQuery(prefix);
  }

  return gql`
    query GetMaxRoutersPerTransfer {
      ${combinedQuery}
    }
  `;
};

export const getAssetBalanceQuery = (prefix: string, router: string, local: string): string => {
  const queryString = `
    ${prefix}_assetBalance(id: "${local}-${router}") {
      ${ASSET_BALANCE_ENTITY}
    }`;
  return gql`
    query GetAssetBalance {
      ${queryString}
    }
  `;
};

export const getAssetBalancesQuery = (prefix: string, router: string): string => {
  const queryString = `
    ${prefix}_assetBalances(where: { router: "${router}" }) {
      ${ASSET_BALANCE_ENTITY}
    }`;

  return gql`
      query GetAssetBalance {
        ${queryString}
      }
    `;
};

export const getAssetBalancesRoutersQuery = (
  prefix: string,
  offset: number,
  limit: number,
  orderDirection: "asc" | "desc" = "desc",
): string => {
  const queryString = `
    ${prefix}_routers(
    skip: ${offset},
    first: ${limit},
    orderBy: id,
    orderDirection: ${orderDirection}) {
      id
      assetBalances{
        ${ASSET_BALANCE_ENTITY}
      }
    }`;

  return gql`
      query GetAssetBalancesRouters {
        ${queryString}
      }
    `;
};

export const getRouterQuery = (prefix: string, router: string): string => {
  const queryString = `
    ${prefix}_router(id: "${router}") {
      id
    }`;

  return gql`
    query GetRouter {
      ${queryString}
    }
  `;
};

export const getAssetByLocalQuery = (prefix: string, local: string): string => {
  const queryString = `
    ${prefix}_assets(where: { id: "${local}" }) {
      ${ASSET_ENTITY}
    }`;
  return gql`
    query GetAssetByLocal {
      ${queryString}
    }
  `;
};

export const getAssetsByLocalsQuery = (prefix: string, locals: string[]): string => {
  const queryString = `
  ${prefix}_assets(
    where: { localAsset_in: [${locals.map((l) => `"${l}"`)}] }
  ) {
    ${ASSET_ENTITY}
  }`;
  return gql`
    query GetAssetsByLocals {
      ${queryString}
    }
  `;
};

export const getAssetByCanonicalIdQuery = (prefix: string, canonicalId: string): string => {
  const str = `
    ${prefix}_assets(
      where: { 
        canonicalId: "${canonicalId}" 
      }, 
      orderBy: blockNumber, 
      orderDirection: desc
    ) {
      ${ASSET_ENTITY}
    }`;

  return gql`
    query GetAssetByCanonicalId {
        ${str}
    }
  `;
};

export const getOriginTransfersByIdsQuery = (prefix: string, transferIds: string[]): string => {
  const queryStr = `
    ${prefix}_originTransfers(where: { transferId_in: [${transferIds}] }) {${ORIGIN_TRANSFER_ENTITY}}`;
  return gql`
    query GetOriginTransfers {
      ${queryStr}
    }
  `;
};

export const getOriginTransfersByTransactionHashesQuery = (prefix: string, hashes: string[]): string => {
  const queryStr = `
    ${prefix}_originTransfers(where: { transactionHash_in: [${hashes}] }) {${ORIGIN_TRANSFER_ENTITY}}`;
  return gql`
    query GetOriginTransfers {
      ${queryStr}
    }
  `;
};

const originTransferQueryString = (
  prefix: string,
  originDomain: string,
  fromNonce: number,
  destinationDomains: string[],
  maxBlockNumber?: number,
  orderDirection: "asc" | "desc" = "desc",
) => {
  return `${prefix}_originTransfers(
    where: {
      originDomain: ${originDomain},
      nonce_gte: ${fromNonce},
      destinationDomain_in: [${destinationDomains}]
      ${maxBlockNumber ? `, blockNumber_lte: ${maxBlockNumber}` : ""}
    },
    orderBy: blockNumber,
    orderDirection: ${orderDirection}
  ) {${ORIGIN_TRANSFER_ENTITY}}`;
};

export const getOriginTransfersQuery = (agents: Map<string, SubgraphQueryMetaParams>): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (agents.has(domain)) {
      combinedQuery += originTransferQueryString(
        prefix,
        domain,
        agents.get(domain)!.latestNonce,
        domains,
        agents.get(domain)!.maxBlockNumber,
        agents.get(domain)!.orderDirection,
      );
    } else {
      console.log(`No agents for domain: ${domain}`);
    }
  }

  return gql`
    query GetOriginTransfers { 
        ${combinedQuery}
      }
  `;
};

const originTransferByNonceQueryString = (
  prefix: string,
  fromNonce: number,
  maxBlockNumber?: number,
  orderDirection: "asc" | "desc" = "desc",
) => {
  return `${prefix}_originTransfers(
    where: {
      nonce_gte: ${fromNonce},
      ${maxBlockNumber ? `, blockNumber_lte: ${maxBlockNumber}` : ""}
    },
    orderBy: nonce,
    orderDirection: ${orderDirection}
  ) {${ORIGIN_TRANSFER_ENTITY}}`;
};

export const getOriginTransfersByNonceQuery = (agents: Map<string, SubgraphQueryMetaParams>): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (agents.has(domain)) {
      combinedQuery += originTransferByNonceQueryString(
        prefix,
        agents.get(domain)!.latestNonce,
        agents.get(domain)!.maxBlockNumber,
        agents.get(domain)!.orderDirection,
      );
    }
  }

  return gql`
    query GetOriginTransfers {
        ${combinedQuery}
      }
  `;
};

const destinationTransferByNonceQueryString = (
  prefix: string,
  fromNonce: number,
  orderDirection: "asc" | "desc" = "desc",
) => {
  return `${prefix}_destinationTransfers(
    where: {
      nonce_gte: ${fromNonce},
    },
    orderBy: nonce,
    orderDirection: ${orderDirection}
  ) {${DESTINATION_TRANSFER_ENTITY}}`;
};

export const getDestinationTransfersByNonceQuery = (agents: Map<string, SubgraphQueryMetaParams>): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (agents.has(domain)) {
      combinedQuery += destinationTransferByNonceQueryString(
        prefix,
        agents.get(domain)!.latestNonce,
        agents.get(domain)!.orderDirection,
      );
    }
  }

  return gql`
    query GetDestinationTransfers {
        ${combinedQuery}
      }
  `;
};

const originTransfersByIDsQueryString = (prefix: string, transferIDs: string[], maxBlockNumber?: number) => {
  return `${prefix}_originTransfers(
    where: {
      transferId_in: [${transferIDs}],
      ${maxBlockNumber ? `, blockNumber_lte: ${maxBlockNumber}` : ""}
    },
  ) {${ORIGIN_TRANSFER_ENTITY}}`;
};

export const getOriginTransfersByIDsCombinedQuery = (
  params: Map<string, SubgraphQueryByTransferIDsMetaParams>,
): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (params.has(domain)) {
      combinedQuery += originTransfersByIDsQueryString(
        prefix,
        params.get(domain)!.transferIDs.map((id) => `"${id}"`),
        params.get(domain)!.maxBlockNumber,
      );
    }
  }

  return gql`
    query GetOriginTransfers {
        ${combinedQuery}
      }
  `;
};

const destinationTransfersByIDsQueryString = (prefix: string, transferIDs: string[]) => {
  return `${prefix}_destinationTransfers(
    where: {
      transferId_in: [${transferIDs}],
    },
  ) {${DESTINATION_TRANSFER_ENTITY}}`;
};

export const getDestinationTransfersByIDsCombinedQuery = (
  params: Map<string, SubgraphQueryByTransferIDsMetaParams>,
): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (params.has(domain)) {
      combinedQuery += destinationTransfersByIDsQueryString(
        prefix,
        params.get(domain)!.transferIDs.map((id) => `"${id}"`),
      );
    }
  }

  return gql`
    query GetDestinationTransfers {
        ${combinedQuery}
      }
  `;
};

const destinationTransfersByReconcileTimestampQueryString = (
  prefix: string,
  fromTimestamp: number,
  maxBlockNumber?: number,
  orderDirection: "asc" | "desc" = "desc",
) => {
  return `
  ${prefix}_destinationTransfers(
    where: {
      reconciledTimestamp_gte: ${fromTimestamp},
      ${maxBlockNumber ? `, reconciledBlockNumber_lte: ${maxBlockNumber}` : ""}
    },
    orderBy: reconciledTimestamp,
    orderDirection: ${orderDirection}
  ) {${DESTINATION_TRANSFER_ENTITY}}`;
};

export const getDestinationTransfersByDomainAndReconcileTimestampQuery = (
  param: SubgraphQueryByTimestampMetaParams,
  domain: string,
): string => {
  const { config } = getContext();

  let query = "";
  const domains = Object.keys(config.sources);
  if (domains.includes(domain)) {
    const prefix = config.sources[domain].prefix;
    query = destinationTransfersByReconcileTimestampQueryString(
      prefix,
      param.fromTimestamp,
      param.maxBlockNumber,
      param.orderDirection,
    );
  }

  return gql`
    query GetDestinationTransfersByReconcileTimestamp {
        ${query}
      }
  `;
};

const destinationTransfersByIdsQueryString = (prefix: string, transferIds: string[]) => {
  return `
  ${prefix}_destinationTransfers ( 
    where: { 
      transferId_in: [${transferIds}]
    }, 
    orderBy: nonce, 
    orderDirection: desc
  ) {
    ${DESTINATION_TRANSFER_ENTITY}
  }`;
};

export const getDestinationTransfersByIdsQuery = (prefix: string, transferIds: string[]): string => {
  const queryStr = `
    ${prefix}_destinationTransfers(
      where: { 
        transferId_in: [${transferIds}] 
      }
    ) {
      ${DESTINATION_TRANSFER_ENTITY}
    }`;
  return gql`
    query GetDestinationTransfers {
      ${queryStr}
    }
  `;
};

export const getDestinationTransfersByDomainAndIdsQuery = (txIdsByDestinationDomain: Map<string, string[]>): string => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const destinationDomain of txIdsByDestinationDomain.keys()) {
    const prefix = config.sources[destinationDomain].prefix;
    combinedQuery += destinationTransfersByIdsQueryString(prefix, txIdsByDestinationDomain.get(destinationDomain)!);
  }
  return gql`
    query GetDestinationTransfers { 
        ${combinedQuery}
      }
  `;
};

export const getOriginMessagesByDomainAndIndexQuery = (
  params: { domain: string; offset: number; limit: number }[],
): string => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const param of params) {
    const prefix = config.sources[param.domain].prefix;
    combinedQuery += `
    ${prefix}_originMessages ( 
      first: ${param.limit}, 
      where: { 
        index_gte: ${param.offset}, 
        transferId_not: null, 
        destinationDomain_not: null
      },
      orderBy: index, 
      orderDirection: asc
    ) {
      ${ORIGIN_MESSAGE_ENTITY}
    }`;
  }

  return gql`
    query GetOriginMessages {
      ${combinedQuery}
    }
  `;
};

export const getSentRootMessagesByDomainAndBlockQuery = (
  params: { domain: string; offset: number; limit: number }[],
) => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const param of params) {
    const prefix = config.sources[param.domain].prefix;
    combinedQuery += `
    ${prefix}_rootMessageSents ( 
      first: ${param.limit}, 
      where: { 
        blockNumber_gt: ${param.offset} 
      }
      orderBy: blockNumber
      orderDirection: asc
    ) {
      ${ROOT_MESSAGE_SENT_ENTITY}
    }`;
  }

  return gql`
    query GetSentRootMessages {
      ${combinedQuery}
    }
  `;
};

export const getProcessedRootMessagesByDomainAndBlockQuery = (
  params: { domain: string; offset: number; limit: number }[],
) => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const param of params) {
    const prefix = config.sources[param.domain].prefix;
    combinedQuery += `
    ${prefix}_rootMessageProcesseds ( 
      first: ${param.limit}, 
      where: { 
        blockNumber_gt: ${param.offset} 
      }
      orderBy: blockNumber
      orderDirection: asc
    ) {
      ${ROOT_MESSAGE_PROCESSED_ENTITY}
    }`;
  }

  return gql`
    query GetProcessedRootMessages {
      ${combinedQuery}
    }
  `;
};

export const getAggregatedRootsByDomainQuery = (params: { hub: string; index: number; limit: number }[]) => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const param of params) {
    const prefix = config.sources[param.hub].prefix;
    combinedQuery += `
    ${prefix}_aggregatedMessageRoots ( 
      first: ${param.limit}, 
      where: { 
        index_gte: ${param.index}
      }
      orderBy: index, 
      orderDirection: asc
    ) {
      ${ROOT_AGGREGATED_ENTITY}
    }`;
  }

  return gql`
    query GetAggregatedRoots {
      ${combinedQuery}
    }
  `;
};

export const getReceivedAggregatedRootsByDomainQuery = (
  params: { domain: string; offset: number; limit: number }[],
) => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const param of params) {
    const prefix = config.sources[param.domain].prefix;
    combinedQuery += `
    ${prefix}_aggregateRoots( 
      first: ${param.limit}, 
      where: { 
        blockNumber_gt: ${param.offset} 
      }
      orderBy: blockNumber
      orderDirection: asc
    ) {
      ${RECEIVED_AGGREGATED_ROOT_ENTITY}
    }`;
  }

  return gql`
    query GetReceivedAggregateRoots {
      ${combinedQuery}
    }
  `;
};

export const getPropagatedRootsQuery = (domain: string, count: number, limit: number) => {
  const { config } = getContext();
  const prefix = config.sources[domain].prefix;
  const queryString = `
  ${prefix}_rootPropagateds ( 
    first: ${limit}, 
    where: { 
      count_gte: ${count} 
    },
    orderBy: count, 
    orderDirection: asc
  ) {
    ${ROOT_PROPAGATED_ENTITY}
  }`;

  return gql`
    query GetPropagatedRoots {
      ${queryString}
    }
  `;
};

export const CONNECTOR_META_ID = "CONNECTOR_META_ID";

export const getConnectorMetaQuery = (domains: string[]) => {
  const { config } = getContext();
  let combinedQuery = "";
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    combinedQuery += `
    ${prefix}_connectorMeta (id: "${CONNECTOR_META_ID}") {
      ${CONNECTOR_META_ENTITY}
    }`;
  }

  return gql`
    query GetConnectorMeta {
      ${combinedQuery}
    }
  `;
};

const ROOT_MANAGER_META_ID = "ROOT_MANAGER_META_ID";

export const getRootManagerMetaQuery = (domain: string) => {
  const { config } = getContext();
  const prefix = config.sources[domain].prefix;

  return gql`
    query GetRootManagerMeta {
        ${prefix}_rootManagerMeta (id: "${ROOT_MANAGER_META_ID}") {
        ${ROOT_MANAGER_META_ENTITY}
      }
    }
  `;
};

export const getStableSwapPoolsQuery = (domain: string) => {
  const { config } = getContext();
  const prefix = config.sources[domain].prefix;
  const queryString = `
  ${prefix}_swap_stableSwaps ( 
    first: 200
  ) {
    ${STABLESWAP_POOL_ENTITY}
  }`;

  return gql`
    query GetStableSwapPools {
      ${queryString}
    }
  `;
};

const swapExchangeQueryString = (
  prefix: string,
  fromTimestamp: number,
  maxBlockNumber?: number,
  orderDirection: "asc" | "desc" = "asc",
) => {
  return `${prefix}_swap_stableSwapExchanges(
    where: {
      timestamp_gte: ${fromTimestamp},
      ${maxBlockNumber ? `, blockNumber_lte: ${maxBlockNumber}` : ""}
    },
    orderBy: timestamp,
    orderDirection: ${orderDirection}
  ) {${STABLESWAP_EXCHANGE_ENTITY}}`;
};

export const getSwapExchangesQuery = (agents: Map<string, SubgraphQueryByTimestampMetaParams>): string => {
  const { config } = getContext();

  let combinedQuery = "";
  const domains = Object.keys(config.sources);
  for (const domain of domains) {
    const prefix = config.sources[domain].prefix;
    if (agents.has(domain)) {
      combinedQuery += swapExchangeQueryString(
        prefix,
        agents.get(domain)!.fromTimestamp,
        agents.get(domain)!.maxBlockNumber,
        agents.get(domain)!.orderDirection,
      );
    } else {
      console.log(`No agents for domain: ${domain}`);
    }
  }

  return gql`
    query GetSwapExchanges { 
        ${combinedQuery}
      }
  `;
};
