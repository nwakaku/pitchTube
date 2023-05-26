require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = "2681881ef2ddd24cd569a5e5df1f34ac3f765f37ad7cffce76a9a7ee3c1fe7b8";

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "hyperspace",
  networks: {
    theta_testnet: {
      url: `https://eth-rpc-api-testnet.thetatoken.org/rpc`,
      accounts: [PRIVATE_KEY],
      chainId: 365,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};