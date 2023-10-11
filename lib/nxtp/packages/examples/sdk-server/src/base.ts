import { FastifyInstance } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { SdkBase, SdkXCallParamsSchema, SdkXCallParams, SdkBumpTransferParamsSchema } from "@connext/sdk";
import { TIntegerString } from "@connext/nxtp-utils";

import { approveIfNeededSchema, getCanonicalTokenIdSchema, calculateCanonicalKeySchema } from "./types/api";

const EstimateRelayerFeeSchema = Type.Object({
  origin: TIntegerString,
  destination: TIntegerString,
});

export type EstimateRelayerFee = Static<typeof EstimateRelayerFeeSchema>;

export const baseRoutes = async (server: FastifyInstance, sdkBaseInstance: SdkBase): Promise<any> => {
  const s = server.withTypeProvider<TypeBoxTypeProvider>();

  s.post<{ Body: SdkXCallParams }>(
    "/xcall",
    {
      schema: {
        body: SdkXCallParamsSchema,
      },
    },
    async (request, reply) => {
      const txReq = await sdkBaseInstance.xcall(request.body);
      reply.status(200).send(txReq);
    },
  );

  s.post<{ Body: EstimateRelayerFee }>(
    "/estimateRelayerFee",
    {
      schema: {
        body: EstimateRelayerFeeSchema,
      },
    },
    async (request, reply) => {
      const { origin, destination } = request.body;
      const txReq = await sdkBaseInstance.estimateRelayerFee({ originDomain: origin, destinationDomain: destination });
      reply.status(200).send(txReq);
    },
  );

  s.post(
    "/approveIfNeeded",
    {
      schema: {
        body: approveIfNeededSchema,
      },
    },
    async (request, reply) => {
      const { domainId, assetId, amount, infiniteApprove } = request.body;
      const txReq = await sdkBaseInstance.approveIfNeeded(domainId, assetId, amount, infiniteApprove);
      reply.status(200).send(txReq);
    },
  );

  s.post(
    "/bumpTransfer",
    {
      schema: {
        body: SdkBumpTransferParamsSchema,
      },
    },
    async (request, reply) => {
      const txReq = await sdkBaseInstance.bumpTransfer(request.body);
      reply.status(200).send(txReq);
    },
  );

  s.get(
    "/getCanonicalTokenId/:domainId/:tokenAddress",
    {
      schema: {
        params: getCanonicalTokenIdSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const res = await sdkBaseInstance.getCanonicalTokenId(domainId, tokenAddress);
      reply.status(200).send(res);
    },
  );

  s.get(
    "/calculateCanonicalKey/:domainId/:tokenId",
    {
      schema: {
        params: calculateCanonicalKeySchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenId } = request.params;
      const res = sdkBaseInstance.calculateCanonicalKey(domainId, tokenId);
      reply.status(200).send(res);
    },
  );
};
