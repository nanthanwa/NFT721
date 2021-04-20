const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function (deployer, network, addresses) {
  const [admin] = addresses;
  deployer.deploy(ERC721PresetMinterPauserAutoId, "My NFT", "NFT", "http://my-json-server.typicode.com/huangsuyu/nft/tokens", { from: admin });
};
