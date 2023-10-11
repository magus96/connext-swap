import { expect } from "@connext/nxtp-utils";
import { SinonStub, stub } from "sinon";

import { NoChainIdForHubDomain, RelayerProxyHubNotFound } from "../../../../src/tasks/propagate/errors";
import { propagate } from "../../../../src/tasks/propagate/operations";
import * as PropagateFns from "../../../../src/tasks/propagate/operations/propagate";
import { propagateCtxMock, sendWithRelayerWithBackupStub } from "../../../globalTestHook";
import { mock } from "../../../mock";
import * as Mockable from "../../../../src/mockable";

describe("Operations: Propagate", () => {
  describe("#propagate", () => {
    beforeEach(() => {
      stub(Mockable, "encodePropagate").returns("0xbeef");
      stub(Mockable, "encodePropagateForRelayerProxy").returns("0xbeef");
      stub(Mockable, "getDeployedRootManagerContract").returns({ address: "0xbeef", abi: [] });
    });

    it("should throw an error if no hub domain id", async () => {
      propagateCtxMock.chainData = new Map();
      await expect(propagate()).to.eventually.be.rejectedWith(NoChainIdForHubDomain);
    });

    it("should send encoded data to relayer succesfully", async () => {
      stub(PropagateFns, "getParamsForDomainFn").value({
        [mock.domain.A]: () => Promise.resolve({ _encodedData: "0x", _fee: "0" }),
        [mock.domain.B]: () => Promise.resolve({ _encodedData: "0x", _fee: "0" }),
      });

      await propagate();
      expect(sendWithRelayerWithBackupStub).callCount(1);
    });
  });
});
