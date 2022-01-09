import { expect } from "chai";
import { ethers } from "hardhat";
import { MetaGirlsContracts__factory } from "./../typechain/index";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("MetaGirlsContracts", function () {
  it("Deploy Meta Girls Contracts", async function () {
    const [deployer] = await ethers.getSigners();

    const factory = new MetaGirlsContracts__factory(deployer);
    const contract = await factory.deploy();

    

    console.log(factory);
  });
});
