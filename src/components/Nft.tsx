/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  PlasmicNft,
  DefaultNftProps
} from "./plasmic/nft_deep_wire/PlasmicNft";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES/*, SafeEventEmitterProvider*/ } from "@web3auth/base";
import RPC from "./web3/ethersRPC";
import "./App.css";
import { shortenAddress} from '@usedapp/core'
import loader from '../../src/loader.svg';
import Confetti from 'react-confetti';
// import YouTube, { YouTubeProps } from 'react-youtube';

import { useGlobalContext } from './Web3Context';

import userEvent from "@testing-library/user-event";
import { receiveMessageOnPort } from "worker_threads";
import { flushSync } from "react-dom";

export interface NftProps extends DefaultNftProps {}

function Nft_(props: NftProps, ref: HTMLElementRefOf<"div">) {

  const {
    // web3auth,
    // setWeb3auth,
    provider,
    // setProvider,
    userAddress,
    isOwner,
    setIsOwner,
    // bal
    // setUserAddress,
    // userShortenAddr,
    // setShortenAddr,
    // signer,
    // setSigner,
  } = useGlobalContext();

//   const [loading, setLoading] = useState(false);
// const [party, setParty] = useState(false);
// const [freeMoney, setFreeMoney] = useState(false);


console.log("userAddr:", userAddress);

useEffect(() => {

}, [provider]);

// useEffect(() => {
//   const init = async () => {
//     try {

//     const web3auth = new Web3Auth({
//       clientId: clientId,
//       chainConfig: {
//         chainNamespace: CHAIN_NAMESPACES.EIP155,
//         chainId: "0x3", 
//         rpcTarget: endpoint,
//         displayName: "Ropsten Testnet",
//         blockExplorer: "https://ropsten.etherscan.io",
//         ticker: "ETH",
//         tickerName: "Ethereum",
//       },
//     });

//     setWeb3auth(web3auth);

//     await web3auth.initModal();

//       if (web3auth.provider) {
//         setProvider(web3auth.provider);
//       };
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   init();
// }, []);

// const toggle = async () => {
//   if (provider) {
//     await logout();
//   } else {
//     await login();
//   }
// }

// const show = async () => {
//   getAccounts();
//   getChainId();
//   getBalance();
//   getUserInfo();
// }

// const login = async () => {
//   if (!web3auth) {
//     // console.log("web3auth not initialized yet");
//     return;
//   }
//   const web3authProvider = await web3auth.connect();
//   setProvider(web3authProvider);
//   // console.log("web3authProvider: ", web3authProvider);
//   await show();
// };

// const logout = async () => {
//   if (!web3auth) {
//     // console.log("web3auth not initialized yet");
//     return;
//   }
//   await web3auth.logout();
//   setProvider(null);
//   // setAddr("");
//   setUserAddr("")
//   setShortenAddr("");
//   setEtherscanLink("");
//   setNet("");
//   setBal("");
//   setFirstName("anon")
//   setPfp("")
//   // setBalWei(0);
// };

// const getChainId = async () => {
//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);
//   const chainId = await rpc.getChainId();
//   if (chainId === 3) {
//     setNet("Ropsten Testnet");
//   } else {
//     setNet(chainId);
//   }
  
// };

// const getAccounts = async () => {
//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);
//   const address = await rpc.getAccounts();
//   setEtherscanLink("https://ropsten.etherscan.io/address/"+ address);
//   // setAddr(address);
//   setUserAddr(address)
//   const setShortenAddrString = shortenAddress(String(address))
//   setShortenAddr(setShortenAddrString)
//   setUserAddr(address)

// };

// const getBalance = async () => {
//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);
//   const balanceRaw = await rpc.getBalance();
//   const balanceFormatted = Number(balanceRaw).toFixed(5);
//   const balance = String(balanceFormatted) + " ETH"
//   setBal(balance);
//   // setBalWei(balanceRaw as any * 10 ** 18);
// };

// const sendTransaction = async () => {

//   console.log("Let's go!");
//   // const txGasCost = 7 * 10 ** 16;

//   try {
//     // if (balWei * 10 ** 18 < txGasCost ) {
//       await getFreeMoney();
      
//     // } 

//   } catch (error) {
//     return error as string;
//   }

//   console.log("Minting...");

//   try {
//     setLoading(true);
//     setFreeMoney(true); // 有啦！ 
//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);  

//   const name = "Thistle";
//   const symbol = "THISTLE";
//   const uri = "https://ipfs.io/ipfs/bafybeich4dqhadr2sai2pzxpayjqd62fgt46wdz425zha6aam7ikaluv2q/metadata.json"

//   const tx = await rpc.mint(name, symbol, uri);

//   await show();
//   setTxHash("https://ropsten.etherscan.io/tx/" + tx )
//   console.log("txHash: ", tx)
//   setParty(true);
//   setLoading(false);
//   setTimeout( () => {
//     setParty(false)
//     setFreeMoney(false)
  
//   }, 15000
    
//   );
//   console.log("done")

//   } catch (error) {
//     return error as string;
//   }
// };

// const getFreeMoney = async () => {
//   try {
//     setLoading(true);
//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);
//   await rpc.getFreeMoney(faucet, userAddr);
//   setLoading(false);
//   await show();
//   } catch (error) {
//     return error as string;
//   }
// };

// const getUserInfo = async () => {
//   if (!web3auth) {
//     // console.log("web3auth not initialized yet");
//     return;
//   }
//   const user = await web3auth.getUserInfo();
//   if (user) {
//     const str = user.name as any
//     const first = str.split(' ')[0]
//     setFirstName(first)
//     setPfp(user.profileImage as any)
//   }
//   // console.log(user);
// };

// const giveBack = async () => {
//   setLoading(true);

//   if (!provider) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   if (!web3auth) {
//     // console.log("provider not initialized yet");
//     return;
//   }
//   const rpc = new RPC(provider);
//   // await rpc.getFreeMoney(faucet, userAddr);
//   const result = await rpc.giveBack();
//   console.log(result)
//   getBalance()
//   setLoading(false);
// };



  return <PlasmicNft root={{ ref }} {...props} 
  
  
  
  
  
  
  />;
}

const Nft = React.forwardRef(Nft_);
export default Nft;
