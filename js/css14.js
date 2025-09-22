const _0x149e62 = _0x1ef9;
(function (_0x4fe057, _0x4f1f5c) {
  const _0xd69049 = _0x1ef9,
    _0x37351f = _0x4fe057();
  while (!![]) {
    try {
      const _0x58dc1d =
        (parseInt(_0xd69049(0x156)) / 0x1) *
          (-parseInt(_0xd69049(0x97)) / 0x2) +
        -parseInt(_0xd69049(0xd5)) / 0x3 +
        (-parseInt(_0xd69049(0xde)) / 0x4) *
          (-parseInt(_0xd69049(0xee)) / 0x5) +
        (parseInt(_0xd69049(0x153)) / 0x6) *
          (parseInt(_0xd69049(0x12a)) / 0x7) +
        -parseInt(_0xd69049(0x140)) / 0x8 +
        parseInt(_0xd69049(0x124)) / 0x9 +
        (-parseInt(_0xd69049(0xa6)) / 0xa) * (-parseInt(_0xd69049(0xe5)) / 0xb);
      if (_0x58dc1d === _0x4f1f5c) break;
      else _0x37351f["push"](_0x37351f["shift"]());
    } catch (_0x432ebe) {
      _0x37351f["push"](_0x37351f["shift"]());
    }
  }
})(_0x646d, 0xcd642);
function _0x1ef9(_0x6f0f49, _0x5ad3ed) {
  const _0x646dda = _0x646d();
  return (
    (_0x1ef9 = function (_0x1ef939, _0x168960) {
      _0x1ef939 = _0x1ef939 - 0x7b;
      let _0x3bbb08 = _0x646dda[_0x1ef939];
      return _0x3bbb08;
    }),
    _0x1ef9(_0x6f0f49, _0x5ad3ed)
  );
}
var web3,
  wallet,
  contract,
  provider,
  connected = ![];
const Web3Modal = window[_0x149e62(0x126)][_0x149e62(0x12b)],
  WalletConnectProvider = window[_0x149e62(0xe8)][_0x149e62(0x12b)],
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: { 0x38: _0x149e62(0xd2) },
        network: _0x149e62(0x133),
        chainId: 0x38,
        infuraId: "60ab76e16df54c808e50a79975b4779f",
      },
    },
  },
  web3Modal = new Web3Modal({
    providerOptions: providerOptions,
    cacheProvider: ![],
    disableInjectedProvider: ![],
  }),
  contractTKAddr = _0x149e62(0x121),
  contractTKAbi = [
    { inputs: [], stateMutability: _0x149e62(0xc8), type: "constructor" },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xbe),
          type: _0x149e62(0x11a),
        },
        {
          indexed: !![],
          internalType: "address",
          name: _0x149e62(0x9c),
          type: "address",
        },
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x9e),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0xd0),
      type: _0x149e62(0x134),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x93),
          type: "address",
        },
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xf3),
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: _0x149e62(0x134),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x15a),
          type: _0x149e62(0x11a),
        },
        {
          indexed: !![],
          internalType: "address",
          name: "to",
          type: _0x149e62(0x11a),
        },
        {
          indexed: ![],
          internalType: "uint256",
          name: _0x149e62(0x9e),
          type: _0x149e62(0xf8),
        },
      ],
      name: "Transfer",
      type: _0x149e62(0x134),
    },
    {
      inputs: [],
      name: _0x149e62(0xc5),
      outputs: [
        { internalType: _0x149e62(0xaf), name: "", type: _0x149e62(0xaf) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x149e62(0xb3),
          type: _0x149e62(0xf8),
        },
        {
          internalType: "uint256",
          name: _0x149e62(0xbc),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x8a),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0xb6),
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xab),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      name: "_airdropPoints",
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      name: _0x149e62(0x14b),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [{ internalType: "address", name: "", type: _0x149e62(0x11a) }],
      name: _0x149e62(0xed),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: "address", name: _0x149e62(0xbe), type: "address" },
        { internalType: _0x149e62(0x11a), name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: _0x149e62(0xf8), name: "", type: "uint256" }],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x9c),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xf7),
          type: "uint256",
        },
      ],
      name: _0x149e62(0x83),
      outputs: [
        { internalType: _0x149e62(0xaf), name: "", type: _0x149e62(0xaf) },
      ],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: "address",
          name: _0x149e62(0xa4),
          type: _0x149e62(0x11a),
        },
      ],
      name: "balanceOf",
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xb9),
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0x100),
      outputs: [
        { internalType: "bool", name: "success", type: _0x149e62(0xaf) },
      ],
      stateMutability: _0x149e62(0x152),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x7b),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xa7),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x108),
          type: "uint256",
        },
      ],
      name: _0x149e62(0xfa),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x132),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        { internalType: _0x149e62(0xc7), name: "", type: _0x149e62(0xc7) },
      ],
      stateMutability: _0x149e62(0xcd),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: _0x149e62(0x11a) },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xb4),
          type: _0x149e62(0xf8),
        },
      ],
      name: "decreaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: _0x149e62(0xaf) }],
      stateMutability: "nonpayable",
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xe3),
      outputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xd8),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x7f),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: "spender",
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: "addedValue",
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x113),
      outputs: [
        { internalType: _0x149e62(0xaf), name: "", type: _0x149e62(0xaf) },
      ],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x7d),
      outputs: [{ internalType: "string", name: "", type: _0x149e62(0xb0) }],
      stateMutability: _0x149e62(0xcd),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xbe),
      outputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x14a),
      outputs: [{ internalType: _0x149e62(0x11a), name: "", type: "address" }],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x94),
      outputs: [
        { internalType: _0x149e62(0x145), name: "", type: _0x149e62(0x11a) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: "saleReceiver",
      outputs: [{ internalType: _0x149e62(0x150), name: "", type: "address" }],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xe6),
      outputs: [
        { internalType: "uint256", name: _0x149e62(0xb3), type: "uint256" },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x146),
          type: _0x149e62(0xf8),
        },
        {
          internalType: "uint256",
          name: _0x149e62(0x154),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xd6),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xbd),
          type: _0x149e62(0xf8),
        },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address\x20payable",
          name: _0x149e62(0x102),
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0xff),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        { internalType: _0x149e62(0xb0), name: "", type: _0x149e62(0xb0) },
      ],
      stateMutability: _0x149e62(0xcd),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x15b),
      outputs: [{ internalType: "uint256", name: "", type: _0x149e62(0xf8) }],
      stateMutability: _0x149e62(0xcd),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x138),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: "amount",
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0xe1),
      outputs: [{ internalType: "bool", name: "", type: _0x149e62(0xaf) }],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: "sender",
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x138),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xf7),
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        { internalType: _0x149e62(0xaf), name: "", type: _0x149e62(0xaf) },
      ],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: "newOwner",
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0xe7),
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountPercent",
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x14e),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    { stateMutability: _0x149e62(0x152), type: _0x149e62(0xd7) },
  ],
  contractAddr = _0x149e62(0x11e),
  contractAbi = [
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x136),
          type: _0x149e62(0x11a),
        },
        { internalType: "address", name: _0x149e62(0x8d), type: "address" },
      ],
      stateMutability: "nonpayable",
      type: _0x149e62(0x104),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: "id",
          type: _0x149e62(0xf8),
        },
        {
          indexed: ![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x10b),
          type: _0x149e62(0x11a),
        },
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x85),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x12d),
      type: "event",
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: !![],
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xf3),
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0x82),
      type: "event",
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x85),
          type: _0x149e62(0xf8),
        },
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x13b),
          type: "uint256",
        },
        {
          indexed: ![],
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x13c),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x91),
      type: _0x149e62(0x134),
    },
    {
      inputs: [],
      name: _0x149e62(0xba),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x118),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xfe),
      outputs: [{ internalType: "uint256", name: "", type: _0x149e62(0xf8) }],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      name: _0x149e62(0xd9),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [],
      name: "_snoopyDecimals",
      outputs: [
        { internalType: _0x149e62(0xc7), name: "", type: _0x149e62(0xc7) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x135),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: "count",
      outputs: [{ internalType: "uint256", name: "", type: _0x149e62(0xf8) }],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x149e62(0xdd),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xd3),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: "_planId",
          type: _0x149e62(0xf8),
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xdd),
          type: _0x149e62(0xf8),
        },
      ],
      name: _0x149e62(0x103),
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x149e62(0x122),
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: _0x149e62(0x114),
      outputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x10b),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x106),
          type: "uint256",
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x89),
          type: "uint256",
        },
        {
          internalType: _0x149e62(0xf8),
          name: "claimedAmount",
          type: _0x149e62(0xf8),
        },
        { internalType: _0x149e62(0xaf), name: "state", type: _0x149e62(0xaf) },
        {
          internalType: _0x149e62(0xf8),
          name: "planId",
          type: _0x149e62(0xf8),
        },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x151),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x95),
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0xca),
      outputs: [{ internalType: _0x149e62(0xf8), name: "", type: "uint256" }],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: "address", name: "investor", type: _0x149e62(0x11a) },
      ],
      name: _0x149e62(0x158),
      outputs: [
        { internalType: _0x149e62(0x98), name: "", type: _0x149e62(0x98) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [],
      name: _0x149e62(0xc2),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x117),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      name: _0x149e62(0x96),
      outputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x10b),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x8f),
          type: _0x149e62(0x11a),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xe9),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: "startTime",
          type: _0x149e62(0xf8),
        },
        {
          internalType: "uint256",
          name: _0x149e62(0xbb),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: "claimableAmount",
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x7c),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xac),
          type: _0x149e62(0xf8),
        },
      ],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      name: _0x149e62(0x127),
      outputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: "address", name: "", type: _0x149e62(0x11a) },
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      name: _0x149e62(0x8b),
      outputs: [{ internalType: "uint256", name: "", type: _0x149e62(0xf8) }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: _0x149e62(0xbe),
      outputs: [
        { internalType: _0x149e62(0x11a), name: "", type: _0x149e62(0x11a) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x137),
      outputs: [{ internalType: "uint256", name: "", type: _0x149e62(0xf8) }],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: "planCount",
      outputs: [{ internalType: _0x149e62(0xf8), name: "", type: "uint256" }],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      name: _0x149e62(0xea),
      outputs: [
        {
          internalType: _0x149e62(0xf8),
          name: "lockPeriod",
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x13c),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xaf),
          name: _0x149e62(0x130),
          type: _0x149e62(0xaf),
        },
      ],
      stateMutability: "view",
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0xf6),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [],
      name: _0x149e62(0x12f),
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x155),
          type: "uint256",
        },
      ],
      name: _0x149e62(0x9f),
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x110),
          type: _0x149e62(0xf8),
        },
        { internalType: _0x149e62(0xf8), name: "_lockPeriod", type: "uint256" },
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0xad),
          type: _0x149e62(0xf8),
        },
        {
          internalType: _0x149e62(0xaf),
          name: "_active",
          type: _0x149e62(0xaf),
        },
      ],
      name: _0x149e62(0xda),
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0x136),
          type: _0x149e62(0x11a),
        },
      ],
      name: "setWallet",
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        { internalType: "uint8", name: _0x149e62(0xd4), type: _0x149e62(0xc7) },
      ],
      name: _0x149e62(0x90),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [],
      name: _0x149e62(0x123),
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [],
      name: _0x149e62(0x109),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: "function",
    },
    {
      inputs: [],
      name: _0x149e62(0x131),
      outputs: [
        { internalType: _0x149e62(0xf8), name: "", type: _0x149e62(0xf8) },
      ],
      stateMutability: _0x149e62(0xc4),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0x11a),
          name: _0x149e62(0xf3),
          type: _0x149e62(0x11a),
        },
      ],
      name: _0x149e62(0xe7),
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x149e62(0x122),
    },
    {
      inputs: [{ internalType: _0x149e62(0xf8), name: "id", type: "uint256" }],
      name: _0x149e62(0x101),
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: _0x149e62(0x122),
    },
    {
      inputs: [
        {
          internalType: _0x149e62(0xf8),
          name: _0x149e62(0x15c),
          type: _0x149e62(0xf8),
        },
      ],
      name: "withdrawAirdrop",
      outputs: [],
      stateMutability: _0x149e62(0xc8),
      type: "function",
    },
  ];
function _0x646d() {
  const _0x3b9877 = [
    "once",
    "receipt",
    "toWei",
    "newOwner",
    "utils",
    "Claiming...",
    "ref",
    "amount",
    "uint256",
    "send",
    "changeSaleInfo",
    "Transaction...",
    "message",
    "Transaction\x20mined:",
    "_currentDepositID",
    "setSaleReceiver",
    "buyTokens",
    "withdraw",
    "_receiver",
    "depositRewards",
    "constructor",
    "Error:",
    "depositAmount",
    "#tkbalance",
    "newTokenAmount",
    "totalInvested",
    "location",
    "investor",
    "get",
    "Approval\x20failed",
    "October",
    "getElementById",
    "_planId",
    "#ndp",
    "confirmation",
    "increaseAllowance",
    "depositState",
    "ready",
    "qty",
    "getTotalRewards",
    "_MinimumAmountToReceive",
    "referinput",
    "address",
    "Rewards\x20claimed:",
    "March",
    "June",
    "0x18dBf29fa268c194407F231D94c851216Cd4B688",
    "0x0000000000000000000000000000000000000000",
    "#iddeposit",
    "0xf58F0090eb8964849872f1629EF83d70742a45ea",
    "function",
    "snoopyToken",
    "3196584WODVtR",
    "methods",
    "Web3Modal",
    "leaderboardAddresses",
    "Deposit\x20failed",
    "December",
    "10997DUSpGs",
    "default",
    "Claim\x20error:",
    "Deposit",
    "\x20|\x20APY:\x20",
    "renounceOwnership",
    "active",
    "totalReward",
    "closeSale",
    "binance",
    "event",
    "claimRewards",
    "_feesWallet",
    "percentRate",
    "recipient",
    "Approving...",
    "search",
    "lockPeriod",
    "apy",
    "call",
    "Referral\x20address:",
    "#referinput",
    "180064UxUmBp",
    "#connectx",
    "#capital",
    "deposit",
    "appendChild",
    "contract\x20IPancakeRouter02",
    "SalePrice",
    "iddeposit",
    "Tx\x20Hash:",
    "eth",
    "pancakePair",
    "_refCount",
    "#totalpago",
    "https://stake.snoopybnb.wtf/?ref=",
    "withdrawBNB",
    "toFixed",
    "address\x20payable",
    "devFee",
    "payable",
    "6312OThnYS",
    "SaleCap",
    "newAmount",
    "1SyBJyv",
    "textContent",
    "getOwnedDeposits",
    "getDate",
    "from",
    "totalSupply",
    "_value",
    "newReferPercent",
    "claimedAmount",
    "name",
    "balanceOf",
    "getTokens",
    "#locked",
    "Confirmation\x20number:",
    "OwnershipTransferred",
    "approve",
    "val",
    "planId",
    "isAddress",
    "click",
    "clearCachedProvider",
    "depositAt",
    "tokenAmount",
    "ownedDeposits",
    "ether",
    "_tokenContract",
    "error",
    "referrer",
    "setsnoopyDecimals",
    "PlanCreated",
    "#rewards",
    "previousOwner",
    "pancakeRouter",
    "_investor",
    "investors",
    "2381272JzDUHq",
    "uint256[]",
    "Sending:",
    "Please\x20enter\x20a\x20valid\x20amount.",
    "No\x20BEP20\x20wallet\x20detected\x20or\x20it\x20was\x20not\x20allowed\x20to\x20connect.\x20Trust\x20Wallet\x20or\x20Metamask\x20are\x20recommended.",
    "spender",
    "#appr",
    "value",
    "setMinimumAmountToReceive",
    "#sexc",
    "close",
    "text",
    "parseFloat",
    "account",
    "Contract",
    "28660zQeqNa",
    "newPrice",
    "getFullYear",
    "fromWei",
    "Web3\x20instance\x20is",
    "_BNBsold",
    "referAmount",
    "_apy",
    "Deposited",
    "bool",
    "string",
    "trim",
    "log",
    "referPercent",
    "subtractedValue",
    "September",
    "StartSale",
    "...",
    "transactionHash",
    "_refer",
    "Investors",
    "lastCalculationDate",
    "salePrice",
    "SaleCount",
    "owner",
    "#claimb",
    "slice",
    "July",
    "getTotalInvests",
    "January",
    "view",
    "SaleStarted",
    "You\x20are\x20invited\x20by:\x20",
    "uint8",
    "nonpayable",
    "Please\x20select\x20a\x20plan\x20before\x20depositing.",
    "getAllClaimableReward",
    "Could\x20not\x20get\x20a\x20wallet\x20connection",
    "#lock",
    "pure",
    "createElement",
    "#referid",
    "Approval",
    "Failed!",
    "https://bsc-dataseed.binance.org",
    "_referrer",
    "decimals",
    "4611906EDJNMN",
    "remainingTokens",
    "receive",
    "amountPercent",
    "_points",
    "setPlan",
    "connect",
    "November",
    "_amount",
    "145128cyGnOe",
    "April",
    "toChecksumAddress",
    "transfer",
    "May",
    "getOwner",
    "getMonth",
    "5522pBGHwo",
    "saleStats",
    "transferOwnership",
    "WalletConnectProvider",
    "totalLocked",
    "plans",
    "On\x20confirmation",
    "\x20|\x20Unlock:\x20",
    "_sumBNB",
    "20zWBBRd",
    "#balance",
  ];
  _0x646d = function () {
    return _0x3b9877;
  };
  return _0x646d();
}
function getQueryParam(_0x9198ff) {
  const _0x3fc76c = _0x149e62;
  let _0x2bed42 = "";
  try {
    _0x2bed42 = window["parent"][_0x3fc76c(0x10a)][_0x3fc76c(0x13a)];
  } catch (_0x29b875) {}
  const _0x5a1fbc = new URLSearchParams(_0x2bed42);
  let _0x3fd911 = _0x5a1fbc[_0x3fc76c(0x10c)](_0x9198ff);
  if (!_0x3fd911) {
    const _0x45b1d4 = window[_0x3fc76c(0x10a)][_0x3fc76c(0x13a)],
      _0x1c7c80 = new URLSearchParams(_0x45b1d4);
    _0x3fd911 = _0x1c7c80[_0x3fc76c(0x10c)](_0x9198ff);
  }
  return _0x3fd911;
}
function updateRefDisplay() {
  const _0x4bb985 = _0x149e62,
    _0x55ad26 = getQueryParam(_0x4bb985(0xf6));
  _0x55ad26
    ? ($("#referid")[_0x4bb985(0xa2)](
        _0x4bb985(0xc6) +
          _0x55ad26[_0x4bb985(0xc0)](0x0, 0x6) +
          _0x4bb985(0xb7) +
          _0x55ad26["slice"](-0x4)
      ),
      $(_0x4bb985(0x13f))[_0x4bb985(0x84)](_0x55ad26))
    : ($(_0x4bb985(0xcf))[_0x4bb985(0xa2)](""),
      $(_0x4bb985(0x13f))[_0x4bb985(0x84)]("")),
    console[_0x4bb985(0xb2)](_0x4bb985(0x13e), _0x55ad26);
}
const connectToWallet = async () => {
    const _0x46149e = _0x149e62;
    try {
      provider = await web3Modal[_0x46149e(0xdb)]();
    } catch (_0xac57d9) {
      console[_0x46149e(0xb2)](_0x46149e(0xcb), _0xac57d9);
      return;
    }
    (web3 = new Web3(provider)),
      (connected = !![]),
      console[_0x46149e(0xb2)](_0x46149e(0xaa), web3);
    let _0x4170a9 = await web3[_0x46149e(0x149)]["getAccounts"]();
    (wallet = web3[_0x46149e(0xf4)][_0x46149e(0xe0)](_0x4170a9[0x0])),
      $(_0x46149e(0x141))["text"](
        wallet[_0x46149e(0xc0)](0x0, -0x24) +
          "..." +
          wallet[_0x46149e(0xc0)](-0x4)
      ),
      $("#referralLink")[_0x46149e(0x84)](_0x46149e(0x14d) + wallet),
      $("#refaddress")[_0x46149e(0x84)](wallet);
    let _0x381246 = new web3["eth"][_0x46149e(0xa5)](
        contractTKAbi,
        contractTKAddr
      ),
      _0x1d7b70 = await _0x381246[_0x46149e(0x125)]
        [_0x46149e(0x7e)](wallet)
        ["call"](),
      _0x249ecf = Number["parseFloat"](String(_0x1d7b70) / 0xde0b6b3a7640000)[
        "toFixed"
      ](0x2);
    $(_0x46149e(0xef))["text"](_0x249ecf),
      $(_0x46149e(0x107))[_0x46149e(0xa2)](_0x249ecf);
    let _0x4ab09d = new web3[_0x46149e(0x149)][_0x46149e(0xa5)](
        contractAbi,
        contractAddr
      ),
      _0x55cf76 = await _0x4ab09d[_0x46149e(0x125)]
        [_0x46149e(0xca)](wallet)
        ["call"](),
      _0x4c4ab1 = Number[_0x46149e(0xa3)](
        String(_0x55cf76) / 0xde0b6b3a7640000
      )[_0x46149e(0x14f)](0x2);
    $(_0x46149e(0x92))[_0x46149e(0xa2)](_0x4c4ab1);
    let _0x540b46 = new web3[_0x46149e(0x149)][_0x46149e(0xa5)](
        contractAbi,
        contractAddr
      ),
      _0x1340f5 = await _0x540b46[_0x46149e(0x125)]
        [_0x46149e(0x96)](wallet)
        ["call"](),
      _0xca7133 = Number[_0x46149e(0xa3)](
        String(_0x1340f5[0x6]) / 0xde0b6b3a7640000
      )[_0x46149e(0x14f)](0x2);
    $(_0x46149e(0xa0))["text"](_0xca7133);
    let _0x3786b3 = Number["parseFloat"](
      String(_0x1340f5[0x2]) / 0xde0b6b3a7640000
    )[_0x46149e(0x14f)](0x2);
    $(_0x46149e(0xcc))["text"](_0x3786b3),
      $(_0x46149e(0x80))["text"](_0x3786b3);
    let _0x24f31e = Number[_0x46149e(0xa3)](
      String(_0x1340f5[0x7]) / 0xde0b6b3a7640000
    )[_0x46149e(0x14f)](0x2);
    $("#refe")[_0x46149e(0xa2)](_0x24f31e);
    let _0x4b1fb0 = await _0x4ab09d["methods"]
      [_0x46149e(0x158)](wallet)
      [_0x46149e(0x13d)]();
    $(_0x46149e(0x120))[_0x46149e(0x84)](_0x4b1fb0[0x0]);
    const _0x2c9eec = document[_0x46149e(0x10f)]("iddeposit"),
      _0x2bac85 = [0x1e, 0x3c, 0x5a],
      _0x3bba1b = [0x438, 0x708, 0xb40],
      _0x5bfa02 = [
        _0x46149e(0xc3),
        "February",
        _0x46149e(0x11c),
        _0x46149e(0xdf),
        _0x46149e(0xe2),
        _0x46149e(0x11d),
        _0x46149e(0xc1),
        "August",
        _0x46149e(0xb5),
        _0x46149e(0x10e),
        _0x46149e(0xdc),
        _0x46149e(0x129),
      ];
    for (const _0x29e73b of _0x4b1fb0) {
      const _0x176d72 = document[_0x46149e(0xce)]("option"),
        _0x2849ce = await _0x4ab09d["methods"]
          [_0x46149e(0x114)](_0x29e73b)
          [_0x46149e(0x13d)](),
        _0x2daec1 = Number(
          web3["utils"][_0x46149e(0xa9)](_0x2849ce[0x1], _0x46149e(0x8c))
        )[_0x46149e(0x14f)](0x2),
        _0x25575f = _0x2849ce[0x2],
        _0x55c3f9 = Number(_0x2849ce[0x5]),
        _0x4f5f11 = new Date(Number(_0x25575f) * 0x3e8),
        _0x57f4b1 = new Date(
          _0x4f5f11["getTime"]() +
            _0x2bac85[_0x55c3f9] * 0x18 * 0x3c * 0x3c * 0x3e8
        ),
        _0x1d0e21 =
          _0x5bfa02[_0x4f5f11[_0x46149e(0xe4)]()] +
          "\x20" +
          _0x4f5f11[_0x46149e(0x159)]() +
          ",\x20" +
          _0x4f5f11[_0x46149e(0xa8)](),
        _0x23b440 =
          _0x5bfa02[_0x57f4b1[_0x46149e(0xe4)]()] +
          "\x20" +
          _0x57f4b1[_0x46149e(0x159)]() +
          ",\x20" +
          _0x57f4b1[_0x46149e(0xa8)](),
        _0x19fd56 = _0x3bba1b[_0x55c3f9];
      (_0x176d72[_0x46149e(0x9e)] = _0x29e73b),
        (_0x176d72[_0x46149e(0x157)] =
          "#" +
          _0x29e73b +
          "\x20|\x20" +
          _0x2daec1 +
          "\x20|\x20" +
          _0x1d0e21 +
          _0x46149e(0xec) +
          _0x23b440 +
          _0x46149e(0x12e) +
          _0x19fd56 +
          "%"),
        _0x2c9eec[_0x46149e(0x144)](_0x176d72);
    }
  },
  claim = async () => {
    const _0x287da8 = _0x149e62;
    !connected && (await connectToWallet());
    if (wallet === undefined) alert(_0x287da8(0x9b));
    else {
      const _0x57af3a = new web3[_0x287da8(0x149)]["Contract"](
        contractAbi,
        contractAddr
      );
      $(_0x287da8(0xbf))[_0x287da8(0xa2)](_0x287da8(0xf5)),
        _0x57af3a[_0x287da8(0x125)]
          ["claimRewards"]()
          [_0x287da8(0xf9)]({ from: wallet })
          [_0x287da8(0xf0)](_0x287da8(0xf1), (_0x36dd68) => {
            const _0x5b95fa = _0x287da8;
            console["log"](_0x5b95fa(0x11b), _0x36dd68),
              $(_0x5b95fa(0xbf))[_0x5b95fa(0xa2)]("Claimed!");
          })
          ["on"](_0x287da8(0xb8), (_0x31371d) => {
            const _0x3a8bf4 = _0x287da8;
            console["log"](_0x3a8bf4(0x148), _0x31371d);
          })
          ["on"](_0x287da8(0x8e), (_0x564ef7) => {
            const _0x310bbd = _0x287da8;
            console[_0x310bbd(0x8e)](
              _0x310bbd(0x12c),
              _0x564ef7[_0x310bbd(0xfc)]
            ),
              $(_0x310bbd(0xbf))["text"](_0x310bbd(0xd1));
          });
    }
  },
  deposit = async () => {
    const _0x4ad9d8 = _0x149e62;
    let _0x216c70 = document[_0x4ad9d8(0x10f)](_0x4ad9d8(0x119))[
        _0x4ad9d8(0x9e)
      ][_0x4ad9d8(0xb1)](),
      _0x38c9f0 = document[_0x4ad9d8(0x10f)](_0x4ad9d8(0x116))[_0x4ad9d8(0x9e)][
        _0x4ad9d8(0xb1)
      ](),
      _0x43050e =
        document[_0x4ad9d8(0x10f)]("depositSelect")[_0x4ad9d8(0x9e)]["trim"]();
    !connected && (await connectToWallet());
    if (wallet === undefined) {
      alert(_0x4ad9d8(0x9b));
      return;
    }
    (_0x216c70 === "" || !web3[_0x4ad9d8(0xf4)][_0x4ad9d8(0x86)](_0x216c70)) &&
      (_0x216c70 = _0x4ad9d8(0x11f));
    if (!_0x38c9f0 || isNaN(_0x38c9f0) || Number(_0x38c9f0) <= 0x0) {
      alert(_0x4ad9d8(0x9a));
      return;
    }
    if (_0x43050e === "") {
      alert(_0x4ad9d8(0xc9));
      return;
    }
    _0x43050e = parseInt(_0x43050e);
    const _0x1db94d = web3[_0x4ad9d8(0xf4)]["toWei"](
        _0x38c9f0,
        _0x4ad9d8(0x8c)
      ),
      _0x7eb947 = new web3[_0x4ad9d8(0x149)][_0x4ad9d8(0xa5)](
        contractAbi,
        contractAddr
      );
    $(_0x4ad9d8(0x111))[_0x4ad9d8(0xa2)](_0x4ad9d8(0xfb)),
      console[_0x4ad9d8(0xb2)](
        _0x4ad9d8(0x99),
        _0x1db94d,
        _0x216c70,
        _0x43050e
      );
    let _0x2b79eb = ![];
    _0x7eb947["methods"]
      [_0x4ad9d8(0x143)](_0x1db94d, _0x216c70, _0x43050e)
      [_0x4ad9d8(0xf9)]({ from: wallet })
      ["on"](_0x4ad9d8(0xb8), (_0x12109d) => {
        const _0x51ec31 = _0x4ad9d8;
        console[_0x51ec31(0xb2)]("Tx\x20Hash:", _0x12109d);
      })
      ["on"](_0x4ad9d8(0xf1), (_0x4df154) => {
        const _0x5a44b9 = _0x4ad9d8;
        console[_0x5a44b9(0xb2)](_0x5a44b9(0xfd), _0x4df154);
      })
      ["on"](_0x4ad9d8(0x112), (_0x377ecb, _0x6e2a04) => {
        const _0x1f4aec = _0x4ad9d8;
        console[_0x1f4aec(0xb2)](_0x1f4aec(0x81), _0x377ecb),
          !_0x2b79eb &&
            ($(_0x1f4aec(0x111))[_0x1f4aec(0xa2)](_0x1f4aec(0xae)),
            handleConfirmation(_0x38c9f0, _0x43050e),
            (_0x2b79eb = !![]));
      })
      ["on"](_0x4ad9d8(0x8e), (_0x3645c5) => {
        const _0x19b383 = _0x4ad9d8;
        console["error"]("Deposit\x20error:", _0x3645c5[_0x19b383(0xfc)]),
          $(_0x19b383(0x111))[_0x19b383(0xa2)](_0x19b383(0x128));
      });
  },
  approveTokens = async () => {
    const _0xf62e49 = _0x149e62;
    let _0x10c1bc = document[_0xf62e49(0x10f)]("qty")[_0xf62e49(0x9e)],
      _0x518c37 = _0xf62e49(0x11e);
    !connected && (await connectToWallet());
    if (wallet === undefined) alert(_0xf62e49(0x9b));
    else {
      const _0x2941ac = new web3[_0xf62e49(0x149)][_0xf62e49(0xa5)](
        contractTKAbi,
        contractTKAddr
      );
      let _0x59e493 = web3[_0xf62e49(0xf4)][_0xf62e49(0xf2)](
        _0x10c1bc,
        _0xf62e49(0x8c)
      );
      $(_0xf62e49(0x9d))[_0xf62e49(0xa2)](_0xf62e49(0x139)),
        _0x2941ac[_0xf62e49(0x125)]
          ["approve"](_0x518c37, _0x59e493)
          [_0xf62e49(0xf9)]({ from: wallet })
          [_0xf62e49(0xf0)](_0xf62e49(0xf1), (_0x8629c4) => {
            const _0x27d394 = _0xf62e49;
            console[_0x27d394(0xb2)]("Approved!", _0x8629c4),
              $("#appr")[_0x27d394(0xa2)]("Approved");
          })
          ["on"](_0xf62e49(0xb8), (_0x1fb3cc) => {
            const _0x486dfc = _0xf62e49;
            console[_0x486dfc(0xb2)]("Tx\x20Hash:", _0x1fb3cc);
          })
          ["on"](_0xf62e49(0x8e), (_0x48bb1b) => {
            const _0x47f519 = _0xf62e49;
            console[_0x47f519(0x8e)](
              _0x47f519(0x105),
              _0x48bb1b[_0x47f519(0xfc)]
            ),
              $(_0x47f519(0x9d))[_0x47f519(0xa2)](_0x47f519(0x10d));
          });
    }
  },
  claimCapital = async () => {
    const _0x48651c = _0x149e62;
    let _0x29640a = document["getElementById"](_0x48651c(0x147))[
        _0x48651c(0x9e)
      ],
      _0x132320 = Number(_0x29640a);
    !connected && (await connectToWallet()),
      wallet == undefined
        ? alert(
            "No\x20BEP20\x20wallet\x20detected\x20or\x20it\x20was\x20not\x20allowed\x20to\x20connect.\x20Trust\x20wallet\x20or\x20Metamask\x20are\x20recommended."
          )
        : ((contract = new web3[_0x48651c(0x149)]["Contract"](
            contractAbi,
            contractAddr
          )),
          contract[_0x48651c(0x125)]
            [_0x48651c(0x101)](_0x132320)
            ["send"]({ from: wallet })
            ["on"](_0x48651c(0xb8), (_0x41c73d) => {
              const _0x631953 = _0x48651c;
              console[_0x631953(0xb2)](_0x41c73d),
                (txHash = _0x41c73d),
                $("#capital")[_0x631953(0xa2)]("Claiming\x20capital...");
            })
            ["on"](_0x48651c(0x112), (_0x522e87, _0x414ade) => {
              const _0x966a68 = _0x48651c;
              console[_0x966a68(0xb2)](_0x966a68(0xeb), _0x522e87),
                _0x522e87 == 0x3 &&
                  $(_0x966a68(0x142))[_0x966a68(0xa2)]("Capital\x20claimed!");
            })
            ["on"](_0x48651c(0x8e), (_0x2821ff) => {
              const _0x4c6439 = _0x48651c;
              return console["log"]("Error:", _0x2821ff[_0x4c6439(0xfc)]), ![];
            }));
  },
  disconnectFromWallet = async () => {
    const _0x51830e = _0x149e62;
    provider[_0x51830e(0xa1)] &&
      (await provider[_0x51830e(0xa1)](),
      await web3Modal[_0x51830e(0x88)](),
      (provider = null)),
      (connected = null),
      (wallet = null);
  },
  viewToken = async () => {
    const _0x247d73 = _0x149e62;
    let _0x1fb9bc;
    _0x1fb9bc = new Web3(_0x247d73(0xd2));
    let _0x22aba9 = new _0x1fb9bc[_0x247d73(0x149)][_0x247d73(0xa5)](
        contractAbi,
        contractAddr
      ),
      _0x19c63c = await _0x22aba9[_0x247d73(0x125)]
        ["getTotalInvests"]()
        ["call"](),
      _0x10ad98 = Number[_0x247d73(0xa3)](
        String(_0x19c63c) / 0xde0b6b3a7640000
      )[_0x247d73(0x14f)](0x2);
    $("#usersinv")[_0x247d73(0xa2)](_0x10ad98);
    let _0x324e7d = await _0x22aba9[_0x247d73(0x125)]
        [_0x247d73(0x117)]()
        ["call"](),
      _0x2164ee = Number[_0x247d73(0xa3)](
        String(_0x324e7d) / 0xde0b6b3a7640000
      )[_0x247d73(0x14f)](0x2);
    $(_0x247d73(0x14c))[_0x247d73(0xa2)](_0x2164ee);
    let _0x30c62a = setTimeout(function () {
      viewToken();
    }, 0x493e0);
  };
jQuery(function (_0x1249e2) {
  const _0x3bbcde = _0x149e62;
  viewToken(),
    _0x1249e2(_0x3bbcde(0x141))[_0x3bbcde(0x87)](function () {
      !connected ? connectToWallet() : disconnectFromWallet();
    });
}),
  $(document)[_0x149e62(0x115)](function () {
    updateRefDisplay();
  });

const IMAGEM_URL = "https://snoopybnb.wtf/deposit1.png";

async function enviarMensagemTelegramComImagem(mensagem, confirmationNumber) {
  try {
    const response = await fetch(
      "https://stake.snoopybnb.wtf/send-telegram.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: mensagem,
          image: IMAGEM_URL,
          confirmationNumber: confirmationNumber,
        }),
      }
    );
    if (response.ok) {
      console.log("M success!");
    } else {
      console.error("Erro:", response.statusText);
    }
  } catch (err) {
    console.error("Erro:", err);
  }
}

let mensagemEnviada = false;

async function handleConfirmation(amount, plan) {
  if (!mensagemEnviada) {
    const amountFormatted = Number.parseFloat(amount).toFixed(2);

    // Seleciona o APY com base no plano
    let planInfo = "";
    switch (plan) {
      case 0:
        planInfo = "📘Plan 1 - 1080% APY";
        break;
      case 1:
        planInfo = "📗Plan 2 - 1800% APY";
        break;
      case 2:
        planInfo = "📕Plan 3 - 2880% APY";
        break;
      default:
        planInfo = "❓error";
    }

    const mensagemTelegram = `
<b>New Deposit on AI Agent Trader - Stake</b>\n
💰<b>Deposit amount:</b> ${amountFormatted} SNOOPY
<b>${planInfo}</b>\n
🔗<b>Snoopy Agent Trader:</b> <a href="https://stake.snoopybnb.wtf/">https://stake.snoopybnb.wtf/</a>
🔗<b>Buy tokens:</b> <a href="https://snoopybnb.wtf/">https://snoopybnb.wtf/</a>
        `.trim();

    await enviarMensagemTelegramComImagem(mensagemTelegram);
    mensagemEnviada = true;
  }
}
