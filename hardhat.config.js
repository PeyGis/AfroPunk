
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")

const dotenv = require("dotenv");
dotenv.config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli:{
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY
    }
  }
};
