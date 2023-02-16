
const hre = require("hardhat");

async function main() {

  const AfroPunkNFT = await hre.ethers.getContractFactory("AfroPunkNFT");
  const afroPunkNFT = await AfroPunkNFT.deploy();

  await afroPunkNFT.deployed();

  console.log(
    `afroPunkNFT deployed to ${afroPunkNFT.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
