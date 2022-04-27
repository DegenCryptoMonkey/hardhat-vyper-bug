const { ethers } = require("hardhat");

async function main() {
  const Reproduce = await ethers.getContractFactory("Reproduce");
  const reproduceContract = await Reproduce.deploy();
  await reproduceContract.deployed();

  console.log(reproduceContract.functions);

  // Function `withdraw` is recognized because it doesn't use function overloading
  //console.log(reproduceContract.withdraw);

  // This line of code will throw an error because function `deposit` is undefined!
  console.log(await reproduceContract["deposit(uint256)"](10));
  //console.log(await reproduceContract.deposit(10));

  const currentDeposit = await reproduceContract.amount();
  console.log("Deposit amount: ", currentDeposit);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
