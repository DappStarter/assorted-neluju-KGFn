require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember smile hockey prize outer genuine'; 
let testAccounts = [
"0x19011f1dd382ef0e0c0fbbccf1570c7038d6340f34f0754baecb9b0f716b96ce",
"0xfbc7a4e117d039a2178b5f5fc88ad0e386f790d68afcdd9192e11e648f8d2436",
"0x02b27eb74dc7f6e2f33ec31245c05f97b73167b71c387d38dbe453d14bea8b8d",
"0x9d4ba0593be06b57453820cf5ced5d222c45f77edb73a3b588478a5b2ad053e1",
"0xbe728257cebc23cbefa5e3b233a2940d3c895904d2d534162e4d1a4a6800e4ef",
"0x0a8243fd21649fe774456cca2bcf536197993a811e1b6245917f3633fa897590",
"0x9c5d01e4d8b0be90b9f2c9a56adf4ce156cc38050544673b06ec18835dc3ed1b",
"0xdf20f9de1d81e94406409ec8e1e4f88fdcf1815e3cf9dd049d63551e393c5ba6",
"0x746c5d6ef94a382a0e8292c5abb8fd02601f0a96a3dfaaab4e5a9dfb745e9cf8",
"0x41798cf36f2ed7156467dad3f4e325728596b9c50229066186a392f1a19b312e"
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
            version: '^0.8.0'
        }
    }
};

