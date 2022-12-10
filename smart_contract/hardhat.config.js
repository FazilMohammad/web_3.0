require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/CsOeXtYT8jb5ZgFzfbOQ1Ev5pErZa1gH',
      accounts: ['ec5144a4f26c1afb2eae57e18f77a346202b5af40f6d2728ce561765c679592e'],
    },
  },
};