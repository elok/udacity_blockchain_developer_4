// var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "dose element trash rose brown satoshi box accident grass squirrel avoid donor";

const HDWallet = require("truffle-hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
var Web3 = require('web3');

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new Web3.providers.WebsocketProvider("ws://127.0.0.1:7545/");
        // host: "127.0.0.1"
        // return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 4500000
    }
  },
  compilers: {
    solc: {
      // version: ">0.4.14"
    }
  }
};