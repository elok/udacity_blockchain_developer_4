// var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "dose element trash rose brown satoshi box accident grass squirrel avoid donor";

const HDWallet = require("truffle-hdwallet-provider");

// For Ganache Deployment
var Web3 = require('web3');

// For Rinkeby Deployment
const infuraKey = "0a66ec393c3347438f5211c2d001a581";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

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
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      from: ""
    },
  },
  compilers: {
    solc: {
      // version: ">0.4.14"
    }
  }
};