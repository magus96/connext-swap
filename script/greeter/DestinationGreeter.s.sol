// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "@std/Script.sol";
import {DestinationGreeter} from "../../src/contract-examples/greeter/DestinationGreeter.sol";

contract DeployDestinationGreeter is Script {
  function run() external {
    vm.startBroadcast();

    new DestinationGreeter();

    vm.stopBroadcast();
  }
}
