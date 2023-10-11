// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import {IConnectorManager} from "../contracts/messaging/interfaces/IConnectorManager.sol";
import {TypeCasts} from "../contracts/shared/libraries/TypeCasts.sol";
import {TokenId} from "../contracts/core/connext/libraries/TokenId.sol";

import {IBridgeToken} from "../contracts/core/connext/interfaces/IBridgeToken.sol";
import {IConnext} from "../contracts/core/connext/interfaces/IConnext.sol";
import {BridgeMessage} from "../contracts/core/connext/libraries/BridgeMessage.sol";
import {BridgeFacet, ExecuteArgs} from "../contracts/core/connext/facets/BridgeFacet.sol";
import {DestinationTransferStatus} from "../contracts/core/connext/libraries/LibConnextStorage.sol";
import {LPToken} from "../contracts/core/connext/helpers/LPToken.sol";

import {TestERC20} from "../contracts/test/TestERC20.sol";

import {WETH} from "./utils/TestWeth.sol";
import "./utils/ForgeHelper.sol";
import "./utils/Mock.sol";
import "./utils/Deployer.sol";
import {MessagingUtils} from "./utils/Messaging.sol";

import "forge-std/console.sol";

// Holds all balances that are impacted by an xcall
struct XCallBalances {
  uint256 bridgeTransacting;
  uint256 bridgeLocal;
  uint256 bridgeNative;
  uint256 callerTransacting;
  uint256 callerNative;
}

// Holds all balances that are impacted by an execute
struct ExecuteBalances {
  uint256 bridgeLocal;
  uint256 bridgeReceiving; // local -or- adopted
  uint256[] liquidity;
  uint256 toReceiving; // local -or- adopted
}

// Holds all balances that are impacted by a reconcile
struct ReconcileBalances {
  uint256[] liquidity;
  uint256 portalDebt;
  uint256 portalFeeDebt;
}

contract ConnextTest is ForgeHelper, Deployer {
  // ============ Events ============
  event XCalled(
    bytes32 indexed transferId,
    uint256 indexed nonce,
    bytes32 indexed messageHash,
    TransferInfo params,
    address asset,
    uint256 amount,
    address local,
    bytes messageBody
  );

  event Executed(
    bytes32 indexed transferId,
    address indexed to,
    address indexed asset,
    ExecuteArgs args,
    address local,
    uint256 amount,
    address caller
  );

  event Reconciled(
    bytes32 indexed transferId,
    uint32 indexed originDomain,
    address indexed local,
    address[] routers,
    uint256 amount,
    address caller
  );

  event TransferRelayerFeesUpdated(bytes32 indexed transferId, uint256 relayerFee, address caller);

  event InitiatedClaim(uint32 indexed domain, address indexed recipient, address caller, bytes32[] transferIds);

  event Claimed(address indexed recipient, uint256 total, bytes32[] transferIds);

  event XSendCalled(address _token, uint256 _amount, uint32 _destination, bytes32 _externalId);

  // BridgeFacet event
  event Send(
    address indexed token,
    address indexed from,
    uint32 indexed toDomain,
    bytes32 toId,
    uint256 amount,
    bool toHook
  );

  // ============ Storage ============
  // ============ Config
  uint32 _origin = 1111;
  uint32 _destination = 2221;
  uint32 _other = 3331;

  // ============ Assets
  address _canonical;
  uint32 _canonicalDomain;
  bytes32 _canonicalKey;

  address _originLocal;
  address _originAdopted;
  address _originLp; // deployed IFF pool init-d

  address _destinationLocal;
  address _destinationAdopted;
  address _destinationLp; // deployed IFF pool init-d

  // ============ IConnectorManager
  IConnectorManager _originManager;
  IConnectorManager _destinationManager;

  // ============ Relayer fee router
  address _originRelayerFee = address(11232221231);
  address _destinationRelayerFee = address(4545625622535);

  // ============ Connext
  IConnext _originConnext;
  IConnext _destinationConnext;

  // ============ Payable ============
  receive() external payable {}

  // ============ Test set up ============
  function setUp() public {
    // Deploy all the contracts
    utils_deployAssets();
    utils_deployMessaging();
    utils_deployConnext();
  }

  // ============ Utils ============

  function utils_deployAssets() public {
    // deploy tokens
    _canonical = address(new TestERC20("Test Token", "TEST"));
    _originLocal = address(new TestERC20("Test Token", "TEST"));
    _originAdopted = address(new TestERC20("Test Token", "TEST"));
    _destinationLocal = address(new TestERC20("Test Token", "TEST"));
    _destinationAdopted = address(new TestERC20("Test Token", "TEST"));
  }

  function utils_deployMessaging() public {
    // Deploy mock home
    MockHome originHome = new MockHome(_origin);
    MockHome destinationHome = new MockHome(_destination);
    // Deploy origin IConnectorManager
    _originManager = new MockXAppConnectionManager(originHome);
    // Deploy destination IConnectorManager
    _destinationManager = new MockXAppConnectionManager(destinationHome);

    // set this to be a replica so we can call `handle` directly on routers
    MockXAppConnectionManager(address(_destinationManager)).enrollInbox(address(this));
    MockXAppConnectionManager(address(_originManager)).enrollInbox(address(this));
  }

  function utils_deployConnext() public {
    // deploy LP token
    string memory LP_TOKEN_NAME = "Test LP Token Name";
    string memory LP_TOKEN_SYMBOL = "TESTLP";

    // Origin
    LPToken _originLp = new LPToken();
    _originLp.initialize(LP_TOKEN_NAME, LP_TOKEN_SYMBOL);

    // Destination
    LPToken _destinationLp = new LPToken();
    _destinationLp.initialize(LP_TOKEN_NAME, LP_TOKEN_SYMBOL);

    // deploy connext
    address originConnext = deployConnext(_origin, address(_originManager), 7 days, address(_originLp));
    _originConnext = IConnext(originConnext);

    address destinationConnext = deployConnext(
      _destination,
      address(_destinationManager),
      7 days,
      address(_destinationLp)
    );
    _destinationConnext = IConnext(destinationConnext);

    // allowlist contract as router
    _originConnext.addRelayer(address(this));
    _destinationConnext.addRelayer(address(this));

    // set relayer fee router
    _originConnext.setRelayerFeeVault(_originRelayerFee);
    _destinationConnext.setRelayerFeeVault(_destinationRelayerFee);

    // enroll instances
    // set remote routers
    _originConnext.enrollRemoteRouter(_destination, TypeCasts.addressToBytes32(address(_destinationConnext)));
    _destinationConnext.enrollRemoteRouter(_origin, TypeCasts.addressToBytes32(address(_originConnext)));
  }

  function utils_setupAssets(uint32 canonicalDomain, bool localIsAdopted) public {
    bytes32 canonicalId = TypeCasts.addressToBytes32(_canonical);
    _canonicalDomain = canonicalDomain;
    _canonicalKey = keccak256(abi.encode(canonicalId, _canonicalDomain));

    uint256 originCap;
    uint256 destinationCap;
    if (_origin == canonicalDomain) {
      // The canonical domain is the origin, meaning any local
      // assets on the origin should be the canonical
      _originAdopted = _canonical;
      _originLocal = _canonical;
      originCap = 10_000 ether;
    } else if (_destination == canonicalDomain) {
      _destinationAdopted = _canonical;
      _destinationLocal = _canonical;
      destinationCap = 10_000 ether;
    } // otherwise, could be anything

    // Handle origin
    // Set up asset allowlist
    if (_origin == canonicalDomain) {
      console.log("setting up canonical asset on origin");
      _originConnext.setupAsset(TokenId(canonicalDomain, canonicalId), 18, "", "", address(0), address(0), originCap);
    } else {
      console.log("setting up asset on origin");
      _originConnext.setupAssetWithDeployedRepresentation(
        TokenId(canonicalDomain, canonicalId),
        _originLocal,
        localIsAdopted ? address(0) : _originAdopted,
        address(0)
      );
    }

    // Set up asset allowlist
    if (_destination == canonicalDomain) {
      console.log("setting up canonical asset on destination");
      _destinationConnext.setupAsset(
        TokenId(canonicalDomain, canonicalId),
        18,
        "",
        "",
        address(0),
        address(0),
        destinationCap
      );
    } else {
      console.log("setting up asset on destination");
      _destinationConnext.setupAssetWithDeployedRepresentation(
        TokenId(canonicalDomain, canonicalId),
        _destinationLocal,
        localIsAdopted ? address(0) : _destinationAdopted,
        address(0)
      );
    }

    if (localIsAdopted) {
      _originAdopted = _originLocal;
      _destinationAdopted = _destinationLocal;
    }

    // mint the asset
    uint256 toMint = 10_000 ether;
    TestERC20(_originLocal).mint(address(this), toMint);
    TestERC20(_destinationLocal).mint(address(this), toMint);
    TestERC20(_originAdopted).mint(address(this), toMint);
    TestERC20(_destinationAdopted).mint(address(this), toMint);
    TestERC20(_canonical).mint(address(this), toMint);

    // setup + fund the pools if needed
    console.log("_originLocal", _originLocal);
    console.log("_originAdopted", _originAdopted);
    if (_originLocal != _originAdopted) {
      console.log("setting up origin swap");
      utils_setupPool(_origin, _canonicalKey, 100 ether);
    }

    if (_destinationLocal != _destinationAdopted) {
      utils_setupPool(_destination, _canonicalKey, 100 ether);
    }
  }

  function utils_setupPool(
    uint32 domain,
    bytes32 canonicalKey,
    uint256 amount
  ) public {
    bool isOrigin = domain == _origin;
    // get tokens
    IERC20[] memory pooledTokens = new IERC20[](2);
    pooledTokens[0] = IERC20(isOrigin ? _originLocal : _destinationLocal);
    pooledTokens[1] = IERC20(isOrigin ? _originAdopted : _destinationAdopted);

    // get decimals
    uint8[] memory decimals = new uint8[](2);
    decimals[0] = 18;
    decimals[1] = 18;

    IConnext connext = isOrigin ? _originConnext : _destinationConnext;

    {
      console.log("initializing swap between:");
      console.log("- ", address(pooledTokens[0]));
      console.log("- ", address(pooledTokens[1]));

      string memory LP_TOKEN_NAME = "Test LP Token Name";
      string memory LP_TOKEN_SYMBOL = "TESTLP";

      // initialize pool
      connext.initializeSwap(
        canonicalKey, // canonicalkey
        pooledTokens, // pooled
        decimals, // decimals
        LP_TOKEN_NAME, // lp token name
        LP_TOKEN_SYMBOL, // lp token symbol
        50, // initialAValue
        0, // fee
        0
      );

      if (amount == 0) {
        return;
      }

      // fund the pool
      uint256[] memory amounts = new uint256[](2);
      amounts[0] = amount;
      amounts[1] = amount;

      pooledTokens[0].approve(address(connext), amount);
      pooledTokens[1].approve(address(connext), amount);

      connext.addSwapLiquidity(canonicalKey, amounts, 0, block.timestamp + 60);
      assertTrue(connext.getSwapVirtualPrice(canonicalKey) != 0);
    }
  }

  function utils_createTransferIdInformation(
    uint32 destination,
    uint256 amount,
    uint256 bridgedAmount
  ) public returns (TransferInfo memory) {
    bool sendToDest = destination == _destination;
    bytes32 canonicalId = TypeCasts.addressToBytes32(_canonical);
    return
      TransferInfo({
        originDomain: sendToDest ? _origin : _destination,
        destinationDomain: destination,
        canonicalDomain: _canonicalDomain,
        to: address(1111),
        delegate: address(2222),
        receiveLocal: false,
        callData: bytes(""),
        slippage: 1000,
        // These items would normally be replaced in the nested internal _xcall,
        // but will be defined as the "expected values" for the purpose of getting
        // the expected transfer ID.
        originSender: address(this),
        bridgedAmt: bridgedAmount,
        normalizedIn: amount,
        nonce: 0,
        canonicalId: canonicalId
      });
  }

  // ============ XCall helpers

  function utils_getXCallBalances(address transacting, address bridge) public returns (XCallBalances memory) {
    bool isDestination = bridge == address(_destinationConnext);
    return
      XCallBalances(
        transacting == address(0) ? bridge.balance : IERC20(transacting).balanceOf(bridge), // bridge transacting balance (what will sit there)
        IERC20(isDestination ? _destinationLocal : _originLocal).balanceOf(bridge), // bridge local balance
        bridge.balance, // bridge native balance
        transacting == address(0) ? address(this).balance : IERC20(transacting).balanceOf(address(this)), // caller transacting balance
        address(this).balance
      );
  }

  function utils_xcallAndAssert(
    TransferInfo memory params,
    address asset, // input asset
    uint256 amount, // input amount
    uint256 relayerFee
  ) public returns (bytes32) {
    XCallBalances memory initial;
    if (asset != address(0)) {
      // Approve the bridge to spend the input tokens.
      IERC20(asset).approve(address(_originConnext), amount);
      // Get initial balances if applicable.
      initial = utils_getXCallBalances(asset, address(_originConnext));
    }

    {
      // Expect an XCalled event.
      vm.expectEmit(true, true, true, true);
      emit XCalled(
        keccak256(abi.encode(params)),
        params.nonce,
        MockHome(address(MockXAppConnectionManager(address(_originManager)).home())).MESSAGE_HASH(),
        params,
        asset,
        amount,
        (params.canonicalId == bytes32("") && params.canonicalDomain == uint32(0)) ? address(0) : _originLocal,
        MockHome(address(MockXAppConnectionManager(address(_originManager)).home())).MESSAGE_BODY()
      );
    }

    bytes32 ret;
    {
      // Make call.
      ret = _originConnext.xcall{value: relayerFee}(
        params.destinationDomain,
        params.to,
        asset,
        params.delegate,
        amount,
        params.slippage,
        params.callData
      );
      // Compare returned transfer ID to expected transfer ID from expected call params.
      assertEq(ret, keccak256(abi.encode(params)));
    }

    // Check balances if applicable.
    if (asset != address(0)) {
      XCallBalances memory end = utils_getXCallBalances(asset, address(_originConnext));

      // FIXME:
      // TODO: do we need these assertions? they were there for the original separated bridge router but i dont know if they make sense anymore
      // assertEq(
      //   end.bridgeTransacting,
      //   asset == _originLocal
      //     ? initial.bridgeTransacting // will be transferred
      //     : initial.bridgeTransacting + amount // will be swapped
      // );
      // assertEq(
      //   end.bridgeLocal,
      //   // on xcall, local will be (1) transferred (or swapped) in, (2) sent to the bridge router
      //   // meaning the balance should only change by the amount swapped
      //   asset == _originLocal ? initial.bridgeLocal : initial.bridgeLocal - params.bridgedAmt
      // );
      assertEq(end.bridgeNative, initial.bridgeNative + relayerFee);
      assertEq(end.callerTransacting, initial.callerTransacting - amount);
      assertEq(end.callerNative, initial.callerNative - relayerFee);
    }

    return ret;
  }

  // ============ Execute helpers
  function utils_createRouters(
    uint256 num,
    bytes32 transferId,
    uint256 liquidity
  ) public returns (address[] memory, bytes[] memory) {
    if (num == 0) {
      address[] memory routers;
      bytes[] memory signatures;
      return (routers, signatures);
    }
    address[] memory routers = new address[](num);
    bytes[] memory signatures = new bytes[](num);

    bytes32 toSign = ECDSA.toEthSignedMessageHash(keccak256(abi.encode(transferId, num)));

    // setup liquidity
    if (liquidity != 0) {
      IERC20(_destinationLocal).approve(address(_destinationConnext), liquidity * num);
    }
    for (uint256 i; i < num; ) {
      routers[i] = vm.addr(777 + i);
      (uint8 v, bytes32 r, bytes32 _s) = vm.sign(777 + i, toSign);
      signatures[i] = abi.encodePacked(r, _s, v);

      // allowlist all routers
      _destinationConnext.approveRouter(routers[i]);
      vm.prank(routers[i]);
      _destinationConnext.initializeRouter(address(0), address(0));

      // add liquidity for all routers
      if (liquidity != 0) {
        _destinationConnext.addRouterLiquidityFor(liquidity, _destinationLocal, routers[i]);
      }

      unchecked {
        ++i;
      }
    }

    return (routers, signatures);
  }

  function utils_createSequencer(bytes32 transferId, address[] memory routers) public returns (address, bytes memory) {
    uint256 key = 0xA11CE;
    address sequencer = vm.addr(key);
    _originConnext.addSequencer(sequencer);
    _destinationConnext.addSequencer(sequencer);

    bytes32 preImage = keccak256(abi.encode(transferId, routers));
    bytes32 toSign = ECDSA.toEthSignedMessageHash(preImage);
    (uint8 v, bytes32 r, bytes32 _s) = vm.sign(key, toSign);
    return (sequencer, abi.encodePacked(r, _s, v));
  }

  function utils_createExecuteArgs(
    TransferInfo memory params,
    bytes32 transferId,
    uint256 pathLen,
    uint256 liquidity
  ) public returns (ExecuteArgs memory) {
    (address[] memory routers, bytes[] memory routerSignatures) = utils_createRouters(pathLen, transferId, liquidity);
    (address sequencer, bytes memory sequencerSignature) = utils_createSequencer(transferId, routers);
    return
      ExecuteArgs(
        params, // TransferInfo
        routers, // routers
        routerSignatures, // router signatures
        sequencer, // sequencer
        sequencerSignature // sequencer signatures
      );
  }

  function utils_createExecuteArgs(TransferInfo memory params, uint256 pathLen) public returns (ExecuteArgs memory) {
    bytes32 transferId = keccak256(abi.encode(params));
    return utils_createExecuteArgs(params, transferId, pathLen, 20 ether);
  }

  function utils_getFastTransferAmount(uint256 amount) public returns (uint256) {
    return (amount * 9995) / 10000;
  }

  function utils_getExecuteBalances(
    address local,
    address receiving,
    address bridge,
    address recipient,
    address[] memory routers
  ) public returns (ExecuteBalances memory) {
    uint256[] memory routerBalances = new uint256[](routers.length);
    for (uint256 i; i < routers.length; ) {
      routerBalances[i] = _destinationConnext.routerBalances(routers[i], local);
      unchecked {
        ++i;
      }
    }
    return
      ExecuteBalances(
        local == address(0) ? bridge.balance : IERC20(local).balanceOf(bridge), // bridge local
        IERC20(receiving).balanceOf(bridge), // bridge receiving
        routerBalances, // router liquidity
        IERC20(receiving).balanceOf(recipient) // to receive
      );
  }

  function utils_executeAndAssert(
    ExecuteArgs memory args,
    bytes32 transferId,
    uint256 bridgeOut,
    uint256 vaultOut,
    bool usesPortals
  ) public {
    address receiving = args.params.canonicalDomain == 0 ? address(0) : args.params.receiveLocal
      ? _destinationLocal
      : _destinationAdopted;

    // Get initial balances, if applicable.
    bool zeroAmountTransfer = args.params.bridgedAmt == 0;
    ExecuteBalances memory initial;
    if (!zeroAmountTransfer) {
      initial = utils_getExecuteBalances(
        _destinationLocal,
        receiving,
        address(_destinationConnext),
        args.params.to,
        args.routers
      );
    }

    // Expect an event.
    vm.expectEmit(true, true, true, true);
    emit Executed(
      transferId,
      args.params.to,
      receiving,
      args,
      args.params.canonicalId == bytes32("") && args.params.canonicalDomain == uint32(0)
        ? address(0)
        : _destinationLocal,
      bridgeOut + vaultOut,
      address(this)
    );

    // Execute on the bridge.
    _destinationConnext.execute(args);

    uint256 pathLen = args.routers.length;
    bool isFast = pathLen != 0;
    // Assert updated balances, if applicable.
    if (!zeroAmountTransfer) {
      ExecuteBalances memory end = utils_getExecuteBalances(
        _destinationLocal,
        receiving,
        address(_destinationConnext),
        args.params.to,
        args.routers
      );

      // You are using internal swaps, so the amount of the local asset on the bridge
      // should *not* change iff you are using adopted assets. However, the router liquidity
      // and bridge adopted balance should drop
      if (!args.params.receiveLocal && _destinationLocal != _destinationAdopted) {
        assertEq(end.bridgeLocal, initial.bridgeLocal);
      } // else, local checked in receiving
      assertEq(end.bridgeReceiving, usesPortals ? initial.bridgeReceiving : initial.bridgeReceiving - bridgeOut);

      // router loses the liquidity it provides (local)
      uint256 debited = isFast ? (utils_getFastTransferAmount(args.params.bridgedAmt)) / pathLen : 0;
      address[] memory stored = _destinationConnext.routedTransfers(transferId);
      if (isFast) {
        for (uint256 i; i <= pathLen - 1; i++) {
          assertEq(stored[i], args.routers[i]);
          assertEq(end.liquidity[i], usesPortals ? initial.liquidity[i] : initial.liquidity[i] - debited);
        }

        uint256 sweep = isFast ? debited + (args.params.bridgedAmt % pathLen) : 0;
        assertEq(stored[pathLen - 1], args.routers[pathLen - 1]);
        assertEq(
          end.liquidity[pathLen - 1],
          usesPortals ? initial.liquidity[pathLen - 1] : initial.liquidity[pathLen - 1] - sweep
        );
      } else {
        assertEq(stored.length, 0);
      }

      // recipient gains (adopted/specified)
      assertEq(end.toReceiving, initial.toReceiving + bridgeOut + vaultOut);

      // status updated
      assertEq(
        uint256(_destinationConnext.transferStatus(transferId)),
        isFast ? uint256(DestinationTransferStatus.Executed) : uint256(DestinationTransferStatus.Completed)
      );

      if (!usesPortals) {
        return;
      }
      assertEq(_destinationConnext.getAavePortalDebt(transferId), bridgeOut);
      assertEq(
        _destinationConnext.getAavePortalFeeDebt(transferId),
        (bridgeOut * _destinationConnext.aavePortalFee()) / 10000
      );
    }
  }

  // Shortcut: no vault or portals.
  function utils_executeAndAssert(
    ExecuteArgs memory args,
    bytes32 transferId,
    uint256 bridgeOut
  ) public {
    utils_executeAndAssert(args, transferId, bridgeOut, 0, false);
  }

  // ============ Reconcile helpers
  function utils_getReconcileBalances(bytes32 transferId, address[] memory routers)
    public
    returns (ReconcileBalances memory)
  {
    uint256[] memory initLiquidity = new uint256[](routers.length);
    for (uint256 i; i < routers.length; i++) {
      initLiquidity[i] = _destinationConnext.routerBalances(routers[i], _destinationLocal);
    }
    return
      ReconcileBalances(
        initLiquidity,
        _destinationConnext.getAavePortalDebt(transferId),
        _destinationConnext.getAavePortalFeeDebt(transferId)
      );
  }

  function utils_reconcileAndAssert(
    TransferInfo memory params,
    bytes32 transferId,
    address[] memory routers
  ) public {
    uint256 bridgedAmt = params.bridgedAmt;
    uint256 nonce = params.nonce;
    // NOTE: the bridge router handles the minting and custodying of assets. as far
    // as connext is concerned, the funds will *always* be transferred to the contract
    // when `reconcile` is called. Mint funds to the contract to mock
    // TestERC20(_destinationLocal).mint(address(_destinationConnext), bridgedAmt);

    // Get initial bridge balance and router liquidity
    ReconcileBalances memory initial = utils_getReconcileBalances(transferId, routers);

    // expect emit
    vm.expectEmit(true, true, true, true);
    emit Reconciled(
      transferId,
      _origin,
      params.canonicalId == bytes32("") && params.canonicalDomain == uint32(0) ? address(0) : _destinationLocal,
      routers,
      bridgedAmt,
      address(this)
    );

    _destinationConnext.handle(
      _origin,
      0,
      TypeCasts.addressToBytes32(address(_originConnext)),
      MessagingUtils.formatMessage(params, _destinationLocal, _canonicalDomain == _destination)
    );

    ReconcileBalances memory end = utils_getReconcileBalances(transferId, routers);
    // assert router liquidity balance
    bool isFast = routers.length != 0;
    uint256 credited = isFast ? bridgedAmt / routers.length : 0;
    for (uint256 i; i < routers.length; i++) {
      assertEq(end.liquidity[i], initial.liquidity[i] + credited);
    }

    // assert portal balance didnt change during reconcile call
    assertEq(end.portalDebt, initial.portalDebt);
    assertEq(end.portalFeeDebt, initial.portalFeeDebt);
    // assert transfer marked as reconciled
    DestinationTransferStatus expected = isFast
      ? DestinationTransferStatus.Completed
      : DestinationTransferStatus.Reconciled;
    assertTrue(_destinationConnext.transferStatus(transferId) == expected);
  }

  // ============ Testing scenarios ============
  // you should be able to create a 0-value transfer (even with asset being defined)
  function test_Connext__zeroValueTransferShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_origin, true);

    // 1. `xcall` on the origin
    TransferInfo memory params = utils_createTransferIdInformation(_destination, 0, 0);
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, 0, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 1, 0);
    utils_executeAndAssert(execute, transferId, 0);

    // 3. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);
  }

  // call a 0-value transfer with address(0) as asset
  function test_Connext__zeroValueTransferWithEmptyAssetShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_origin, true);

    // 1. `xcall` on the origin
    TransferInfo memory params = utils_createTransferIdInformation(_destination, 0, 0);
    params.slippage = 0;
    params.canonicalId = bytes32("");
    params.canonicalDomain = uint32(0);
    bytes32 transferId = utils_xcallAndAssert(params, address(0), 0, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 1, 10 ether);
    utils_executeAndAssert(execute, transferId, 0, 0, false);

    // 3. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);
  }

  // you should be able to bridge local/representative tokens (local == adopted)
  function test_Connext__bridgeFastLocalShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_origin, true);

    // 1. `xcall` on the origin
    uint256 amount = 1 ether;
    uint256 bridgedAmount = amount;
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, amount, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 2, 10 ether);
    utils_executeAndAssert(execute, transferId, utils_getFastTransferAmount(bridgedAmount));

    // 3. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);
  }

  // you should be able to bridge adopted tokens (local != adopted)
  function test_Connext__bridgeFastAdoptedShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_other, false);
    console.log("setup assets");

    // 1. `xcall` on the origin
    uint256 amount = 1 ether;
    uint256 bridgedAmount = _originConnext.calculateSwap(
      _canonicalKey,
      0, // local idx always 0
      1, // adopted idx always 1
      amount // no min
    );
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    bytes32 transferId = utils_xcallAndAssert(params, _originAdopted, amount, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 1, bridgedAmount);
    uint256 bridgedOut = _destinationConnext.calculateSwap(
      _canonicalKey,
      1, // adopted idx always 1
      0, // local idx always 0
      utils_getFastTransferAmount(bridgedAmount)
    );
    utils_executeAndAssert(execute, transferId, bridgedOut);

    // 3. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);
  }

  // you should be able to bridge local asset on origin to adopted asset on destination
  function test_Connext__bridgeFastOriginLocalToDestinationAdoptedShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_other, false);

    // 1. `xcall` on the origin
    uint256 amount = 1 ether;
    uint256 bridgedAmount = amount;
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, amount, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 2, bridgedAmount);
    uint256 bridgedOut = _destinationConnext.calculateSwap(
      _canonicalKey,
      1, // adopted idx always 1
      0, // local idx always 0
      utils_getFastTransferAmount(bridgedAmount)
    );
    utils_executeAndAssert(execute, transferId, bridgedOut);

    // 3. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);
  }

  // you should be able to use the slow path
  function test_Connext__bridgeSlowLocalShouldWork() public {
    // 0. setup contracts
    utils_setupAssets(_other, true); // local is adopted

    // 1. `xcall` on the origin
    uint256 amount = 1 ether;
    uint256 bridgedAmount = amount;
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, amount, 0);

    // create execute args
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 0, bridgedAmount);

    // 2. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);

    // 3. call `execute` on the destination
    utils_executeAndAssert(execute, transferId, bridgedAmount);
  }

  // you should be able to execute unpermissioned external call data
  function test_Connext__unpermissionedCallsWork() public {
    // 0. setup contracts
    utils_setupAssets(_origin, true);
    MockXApp callTo = new MockXApp();
    bytes memory callData = bytes("calling cool stuff");

    // 1. xcall
    uint256 amount = 1 ether;
    uint256 bridgedAmount = amount;
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    params.to = address(callTo);
    params.callData = callData;
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, amount, 0);

    // 2. call `execute` on the destination
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 2, bridgedAmount);
    utils_executeAndAssert(execute, transferId, utils_getFastTransferAmount(bridgedAmount));
    // NOTE: execute only passes if external call passes because of balance assertions on `to`
  }

  // you should be able to execute permissioned external call data
  function test_Connext__permissionedCallsWork() public {
    // 0. setup contracts
    utils_setupAssets(_origin, true);
    MockXApp callTo = new MockXApp();
    callTo.setPermissions(address(this), _origin);
    bytes memory callData = bytes("calling cool stuff");

    // 1. xcall
    uint256 amount = 1 ether;
    uint256 bridgedAmount = amount;
    TransferInfo memory params = utils_createTransferIdInformation(_destination, amount, bridgedAmount);
    params.to = address(callTo);
    params.callData = callData;
    bytes32 transferId = utils_xcallAndAssert(params, _originLocal, amount, 0);

    // create execute args
    ExecuteArgs memory execute = utils_createExecuteArgs(params, transferId, 0, bridgedAmount);

    // 2. call `handle` on the destination
    utils_reconcileAndAssert(params, transferId, execute.routers);

    // 3. call `execute` on the destination
    utils_executeAndAssert(execute, transferId, bridgedAmount);
    // NOTE: execute only passes if external call passes because of balance assertions on `to`
  }

  // you should be able to use a portal
  // function test_Connext__portalsShouldWork() public {
  //   // 0. deploy pool + setup contracts
  //   utils_setupAssets(_origin, false); // local != adopted
  //   MockPool aavePool = new MockPool(false);
  //   _destinationConnext.setAavePool(address(aavePool));
  //   _destinationConnext.setAavePortalFee(5);

  //   // 1. `xcall` on the origin
  //   TransferInfo memory params = utils_createTransferIdInformation(_destination);
  //   XCallArgs memory args = XCallArgs(utils_createUserTransferIdInformation(_destination), _originAdopted, 1 ether);
  //   bytes32 transferId = utils_xcallAndAssert(params, _originLocal, args.amount, 0);

  //   // 2. call `execute` on the destination
  //   ExecuteArgs memory execute = utils_createExecuteArgs(
  //     params,
  //     args.amount,
  //     _destinationLocal,
  //     1,
  //     transferId,
  //     args.amount,
  //     0
  //   );
  //   // allowlist routers for portal
  //   _destinationConnext.approveRouterForPortal(execute.routers[0]);
  //   assertTrue(_destinationConnext.getRouterApprovalForPortal(execute.routers[0]));
  //   utils_executeAndAssert(execute, transferId, utils_getFastTransferAmount(args.amount), 0, true);

  //   // 3. call `handle` on the destination
  //   utils_reconcileAndAssert(transferId, args.amount, args.params.to, execute.routers, params, 0, address(this));

  //   // 4. repay portal out of band
  //   IERC20(_destinationAdopted).approve(address(_destinationConnext), 100 ether);
  //   _destinationConnext.repayAavePortalFor(
  //     params,
  //     _destinationAdopted,
  //     address(this),
  //     execute.normalizedIn,
  //     execute.amount,
  //     0,
  //     _destinationConnext.getAavePortalDebt(transferId),
  //     _destinationConnext.getAavePortalFeeDebt(transferId)
  //   );
  //   assertEq(_destinationConnext.getAavePortalFeeDebt(transferId), 0);
  //   assertEq(_destinationConnext.getAavePortalDebt(transferId), 0);
  // }
}
