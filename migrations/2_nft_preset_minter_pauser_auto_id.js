const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function (deployer, network, addresses) {
  const [admin] = addresses;
  deployer.deploy(ERC721PresetMinterPauserAutoId, "KillSwitch NFT Token V1", "KST", "https://killswitch.finance/merchandise/nft/tokens", { from: admin });
};
