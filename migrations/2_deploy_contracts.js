var EthChat = artifacts.require('./EthChat.sol');

module.exports = function(deployer) {
    deployer.deploy(EthChat);
};
