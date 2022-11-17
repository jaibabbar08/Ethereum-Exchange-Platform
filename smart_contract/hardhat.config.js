require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Z1WcaeSY6J4C_bM2dU1Uo7e-XTHRf6xv',
      accounts: ['efb3c90224907340692ca82f3a835452c591ed546bdee93621215da00c9e4b49'],
    },
  },
};