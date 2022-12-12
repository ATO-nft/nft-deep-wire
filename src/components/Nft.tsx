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

import { useGlobalContext } from './Web3Context';

import userEvent from "@testing-library/user-event";
import { receiveMessageOnPort } from "worker_threads";
import { flushSync } from "react-dom";

export interface NftProps extends DefaultNftProps {}

function Nft_(props: NftProps, ref: HTMLElementRefOf<"div">) {

  const {
    provider,
    userAddress,

  } = useGlobalContext();

  const [txHash, setTxHash] = useState("");

  const [loading, setLoading] = useState(false);
// const [party, setParty] = useState(false);
// const [freeMoney, setFreeMoney] = useState(false);

useEffect(() => {

}, [provider]);


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

const sendTransaction = async () => {
  
  // try {
  //   // if (balWei * 10 ** 18 < txGasCost ) {
  //     await getFreeMoney();
  //   // } 

  // } catch (error) {
  //   return error as string;
  // }

  console.log("Minting...");

  console.log("provider:", provider)

  try {
    setLoading(true);
  if (!provider) {
    console.log("provider not initialized yet");
    setLoading(false);
    return;
  }
  const rpc = new RPC(provider);  

  const tx = await rpc.mint("0x0a4d43276F5D1693e5876131B7560Cd07b9DaA2a");

  setLoading(false);

  setTxHash("https://goerli.etherscan.io/tx/" + tx )
  console.log("txHash: ", txHash)

  console.log("done")

  } catch (error) {
    return error as string;
  }
};

  return <PlasmicNft root={{ ref }} {...props}
  
    bidButton= {{
      props: {
        onClick: () => sendTransaction()
      }
    }}

  />;
}

const Nft = React.forwardRef(Nft_);
export default Nft;
