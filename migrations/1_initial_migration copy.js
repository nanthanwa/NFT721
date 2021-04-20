const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, addresses) {
  const [admin] = addresses;
  deployer.deploy(Migrations, { from: admin });
};
