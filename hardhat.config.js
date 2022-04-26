require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-vyper');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',
  vyper: {
    version: '0.3.1',
  }
};
