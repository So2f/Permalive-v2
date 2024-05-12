import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useEth } from "../contexts/EthContext";

const NavBar = () => {
  const router = useRouter();
  const {
    state: { accounts, contract },
  } = useEth();

  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      // Auto-connect if MetaMask is already authorized
      connectWallet();
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      setIsConnected(false);
      console.log("Please connect to MetaMask.");
    } else {
      setUserAddress(accounts[0]);
      setIsConnected(true);
    }
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const test = async () => {
    try {
      // Write a value to the contract
      await contract.methods.write("123414").send({ from: accounts[0] });

      // Read the value from the contract
      const result = await contract.methods.read().call();

      // Log the result
      console.log(result);
    } catch (error) {
      console.error("Error writing or reading from contract:", error);
    }
  };

  return (
    <div className="flex justify-between items-center h-[100px] relative p-10 mx-28 mt-16">
      <Link href="/">
        <div className="text-white text-6xl cursor-pointer font-extrabold tracking-wide">
          Permalife
        </div>
      </Link>
      <div className="flex gap-20 text-white text-3xl font-thin items-center">
        <Link href="/Explore">
          <div
            className={`relative inline-block cursor-pointer group ${
              router.pathname === "/Explore" ? "border-b-2 border-white" : ""
            }`}
          >
            Explore
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 w-0 group-hover:w-full" />
          </div>
        </Link>
        <div className="relative inline-block cursor-pointer group">
          Marketplace
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 w-0 group-hover:w-full" />
        </div>

        <div className="relative inline-block cursor-pointer group">
          Nos Services
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 w-0 group-hover:w-full" />
        </div>
        <Button
          className="bg-[#0029FF] py-9 px-5 text-2xl rounded-xl hover:bg-purple-600"
          onClick={isConnected ? test : connectWallet}
        >
          {isConnected ? userAddress : "Connect Wallet"}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
