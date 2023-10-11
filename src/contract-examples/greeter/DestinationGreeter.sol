// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import {IXReceiver} from "@connext/interfaces/core/IXReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SingleSwap} from "src/contract-examples/greeter/Swap.sol";

/**
 * @title DestinationGreeter
 * @notice Example destination contract that stores a greeting.
 */
contract DestinationGreeter is IXReceiver {
  string public greeting;

  // The token to be paid on this domain
  address payable public immutable tokenIn;
  address payable public immutable tokenOut;
  address public immutable sender;

  // constructor(address _token) {
  //   token = IERC20(_token);
  // }

  /** @notice The receiver function as required by the IXReceiver interface.
    * @dev The Connext bridge contract will call this function.
    */

  swapTokenInterface private swapToken;
  constuctor(address swapAddress){
    swapToken = swapTokenInterface(swapAddress);
  }
  function xReceive(
    bytes32 _transferId,
    uint256 _amount,
    address _asset,
    address _originSender,
    uint32 _origin,
    bytes memory _callData
  ) external returns (bytes memory) {
    // Check for the right token
    // require(
    //   _asset == address(token),
    //   "Wrong asset received"
    // );
    // Enforce a cost to update the greeting
    require(
      _amount > 0,
      "Must pay at least 1 wei"
    );

    (tokenIn, tokenOut, sender) = abi.decode(_callData, (address));

    uint256 amountOut = swapToken.swapExactInputSingle(tokenIn, tokenOut, _amount);

    tokenOut.transfer(sender, amountOut);

  }
}

