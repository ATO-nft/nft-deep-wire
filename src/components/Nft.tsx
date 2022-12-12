/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  PlasmicNft,
  DefaultNftProps
} from "./plasmic/nft_deep_wire/PlasmicNft";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { useEffect, useState } from "react";
import RPC from "./web3/ethersRPC";
import "./App.css";
import loader from './web3/loader.svg';

import { useGlobalContext } from './Web3Context';

import userEvent from "@testing-library/user-event";
import { receiveMessageOnPort } from "worker_threads";
import { flushSync } from "react-dom";

export interface NftProps extends DefaultNftProps {}

function Nft_(props: NftProps, ref: HTMLElementRefOf<"div">) {

  const {
    provider,
    userAddress,
    setBal
  } = useGlobalContext();

  const [txHash, setTxHash] = useState("");
  const [msgId, setMsgId] = useState<number>(0)
  const [loading, setLoading] = useState(false);
  const [nextId, setNextId] = useState<number>(0);

  const openSeaBaseUrl = "https://testnets.opensea.io/assets/goerli/"
  const contractAddress = "0x0a4d43276f5d1693e5876131b7560cd07b9daa2a"
  const justBoughtId = nextId - 1
  const openSeaLink = openSeaBaseUrl + "/" + contractAddress + "/" + String(justBoughtId)

  useEffect(() => {

    getNextId()
    setMsgId(0)

  }, [provider]);


  const getBalance = async () => {
    if (!provider) {
      return;
    }
    const rpc = new RPC(provider);
    const balanceRaw = await rpc.getBalance();
    console.log("balanceRaw", balanceRaw)
    setBal(balanceRaw);
    return balanceRaw;
  };

  const getNextId = async () => {
    if (!provider) {
      return;
    }
    const rpc = new RPC(provider);
    const nextId = await rpc.getNextId(contractAddress);
    console.log("nextId:", nextId)
    setNextId(nextId);
    return nextId;
  };

  const mint = async () => {

    console.log("Minting...");

    setLoading(true)

    try {

      if (!provider) {
        console.log("provider not initialized yet");
        setMsgId(1);
        setLoading(false)
        return;

      }

      const newBal = await getBalance()

      console.log("newBal:", newBal)

      if (newBal === 0) {
        setMsgId(2);
        setLoading(false)
        return;
      }

      setMsgId(0);

      const rpc = new RPC(provider);  

      const tx = await rpc.mint(contractAddress);

      setLoading(false);

      setTxHash("https://goerli.etherscan.io/tx/" + tx )
      console.log("txHash: ", txHash)
      getNextId()
      setMsgId(3);
      console.log("done")

    } catch (error) {
      return error as string;
    }
  };

  return <PlasmicNft root={{ ref }} {...props}

    msgBox={{
      props: {
        children: (
          
          msgId === 0 ? <p style={{color:"red"}}> </p> :
          msgId === 1 ? <p style={{color:"red", fontWeight: 'bold'}}>Please login first.</p> :
          msgId === 2 ? <p style={{color:"red"}}>You currently don’t have enough ETH.<br/><br/>Your ETH wallet address is:<br/><p style={{color:"red", textAlign:'center'}} >{userAddress}</p><p style={{color:"red", textAlign:'center'}}>If you want to fund your wallet with Visa or Mastercard, you can buy <strong>0.027 ETH</strong> using Moonpay:</p>
          <p><a target='blank' style={{color:"red", fontWeight: 'bold'}} href='https://www.moonpay.com/buy/eth'>https://www.moonpay.com/buy/eth</a></p></p>:
          msgId === 3 && <p style={{color:"#45a2f8", fontWeight: 'bold'}}>You now own this NFT (view on <a style={{color:"#45a2f8", fontWeight: 'bold'}} target="blank" href={openSeaLink}>OpenSea</a>).</p>
        
        )
      }
    }}

    next= {{
      children: nextId
    }}

    loader={{
      render: () => (loading === true ? <div><img src={loader} alt="loader"/></div> : "")
    }}

    bidButton= {{
      props: {
        onClick: () => mint()
      }
    }}

  />;
}

const Nft = React.forwardRef(Nft_);
export default Nft;
