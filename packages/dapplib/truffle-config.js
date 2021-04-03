require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strike cruise night honey heavy praise army gauge'; 
let testAccounts = [
"0x8e1cd2499108c9fc8f32364d18b663131d1b0d09ac66a10dfae6299d8fe6fbcc",
"0x7906a1f91e2e762f37897d6f4d88846253cb951c093032649ae1fbe6301eca54",
"0x50477e9717212de7dec3a56c0ebac918e0a44d9d22ba5f2b190e3b5087c06880",
"0x2b73c7d2afdbe5f270b1d165b16b1a6720782c4ef1d3fb9434ed5687756d1333",
"0x66a49d8fe6cc2c17d5bc7a89a2cb30c4c39b216a6a87596946c1db2f17bc0160",
"0xdcb23f01b4be809845a7df2efb1be96c37854854b4b35ae9d76f86b51e1fc8c9",
"0x454a7d56bafc5328b79b4d9761586933a2ad129675bb6b4a14dc679aec32390d",
"0x3a4c87af68d45c9c5530e8d32202a4161f3e360faa372855cb7c23c1520083cd",
"0x02d1a95932978f38233d6e082d656e68153b699c4bec0f73c88edfefbc821771",
"0xd9fbafa6619515f49454e07dd49935f27fbc4aeea40f0988e231fb505b2da0a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
