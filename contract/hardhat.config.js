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

/*
Currently deployed using remix IDE:
Was getting error when running the command
--------------------------------------------------------
```npx hardhat run scripts/deploy.js --network hyperspace```
--------------------------------------------------------

with API of 
--------------------------------------------------------
https://api.hyperspace.node.glif.io/rpc/v0
https://api.hyperspace.node.glif.io/rpc/v1
----------------------------------------------------------
(no issues when deploying on Mumbai testnet)

Error:
ProviderError: HttpProviderError
    at HttpProvider.request 
    at LocalAccountsProvider.request 
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at EthersProviderWrapper.send 


*/