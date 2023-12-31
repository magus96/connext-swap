// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "@std/Script.sol";
import {SourceGreeter} from "../../src/contract-examples/greeter/SourceGreeter.sol";



contract DeploySourceGreeter is Script {
  function run(address connext, address token, address token2) external {
    vm.startBroadcast();

    new SourceGreeter(connext, token, token2);

    vm.stopBroadcast();
  }
}
