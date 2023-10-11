// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import {IConnext} from "@connext/interfaces/core/IConnext.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ISourceGreeter {
  function xUpdateGreeting (
    address target, 
    uint32 destinationDomain,
    string memory newGreeting,
    uint256 amount,
    uint256 relayerFee
  ) external payable;
}

/**
 * @title SourceGreeter
 * @notice Example source contract that updates a greeting on DestinationGreeter.
 */
contract SourceGreeter {
  // The Connext contract on this domain
  IConnext public immutable connext;

  // The token to be paid on this domain
  IERC20 public immutable tokenIn;
  IERC20 public immutable tokenOut;
  
  // Slippage (in BPS) for the transfer set to 100% for this example
  uint256 public immutable slippage = 10000;

  constructor(address _connext, address _tokenIn, address _tokenOut) {
    connext = IConnext(_connext);
    tokenIn = IERC20(_tokenIn);
    tokenOut = IERC20(_tokenOut);
  }

 
  function xUpdateGreeting (
    address target, 
    uint32 destinationDomain,
    uint256 amount,
    uint256 relayerFee
  ) external payable {
    require(
      tokenIn.allowance(msg.sender, address(this)) >= amount,
      "User must approve amount"
    );

    // User sends funds to this contract
    tokenIn.transferFrom(msg.sender, address(this), amount);

    // This contract approves transfer to Connext
    tokenIn.approve(address(connext), amount);

    // Encode calldata for the target contract call
    bytes memory callData = abi.encode(tokenIn, tokenOut, msg.sender);

    connext.xcall{value: relayerFee}(
      destinationDomain, // _destination: Domain ID of the destination chain
      target,            // _to: address of the target contract
      address(tokenIn),    // _asset: address of the token contract
      msg.sender,        // _delegate: address that can revert or forceLocal on destination
      amount,            // _amount: amount of tokens to transfer
      slippage,          // _slippage: max slippage the user will accept in BPS (e.g. 300 = 3%)
      callData           // _callData: the encoded calldata to send
    );
  }
}
