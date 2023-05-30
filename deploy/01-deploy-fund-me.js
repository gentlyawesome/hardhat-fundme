const { getNamedAccounts, network } = require("hardhat");
const { networkConfig, deploymentChain } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  if (deploymentChain.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  const args = [ethUsdPriceFeedAddress];
  const fundeMe = await deploy("FundMe", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: network.config.blockConfirmation || 1,
  });

  if (
    !deploymentChain.includes(network.name) 
  ) {
    await verify(fundeMe.address, [ethUsdPriceFeedAddress]);
  }
  log("------------------------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
