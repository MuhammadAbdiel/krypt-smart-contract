require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
    },
  },
};
