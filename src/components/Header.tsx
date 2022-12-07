/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useEffect, useState } from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/nft_deep_wire/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./web3/ethersRPC";
import "../App.css";
import { shortenAddress} from '@usedapp/core'
import loader from './web3/loader.svg';

export interface HeaderProps extends DefaultHeaderProps {}

const clientId = String(process.env.REACT_APP_WEB3_AUTH_CLIENT_ID);
const endpoint = String(process.env.REACT_APP_RPC_URL);
const faucet = String(process.env.REACT_APP_FAUCET_PRIVATE_KEY);

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {

  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  const [addr, setAddr] = useState("");
  // const [shortenAddr, setShortenAddr] = useState("");
  // const [etherscanLink, setEtherscanLink] = useState("");
  const [txHash, setTxHash] = useState("");
  // const [net, setNet] = useState("");
  // const [bal, setBal] = useState("");
  // const [balWei, setBalWei] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [party, setParty] = useState(false);

  useEffect(() => {
    show();
  }, [provider]);
  
  useEffect(() => {
    const init = async () => {
      try {
  
      const web3auth = new Web3Auth({
        clientId: clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x5", 
          rpcTarget: endpoint,
          displayName: "Goerli Testnet",
          blockExplorer: "https://goerli.etherscan.io",
          ticker: "ETH",
          tickerName: "Ethereum",
        },
      });
  
      setWeb3auth(web3auth);
  
      await web3auth.initModal();
  
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        };
      } catch (error) {
        console.error(error);
      }
    };
  
    init();
  }, []);
  
  const toggle = async () => {
    if (provider) {
      await logout();
    } else {
      await login();
    }
  }
  
  const show = async () => {
    getAccounts();
    getChainId();
    getBalance();
  }
  
  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    console.log("web3authProvider: ", web3authProvider);
    await show();
  };
  
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setAddr("");
    // setShortenAddr("");
    // setEtherscanLink("");
    // setNet("");
    // setBal("");
    // setBalWei(0);
  };
  
  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    if (chainId === 3) {
      // setNet("Ropsten Testnet");
    } else {
      // setNet(chainId);
    }
    console.log("chainId:", chainId);
    
  };
  
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    // setEtherscanLink("https://ropsten.etherscan.io/address/"+ address);
    setAddr(address);
    const setShortenAddrString = shortenAddress(String(address))
    // setShortenAddr(setShortenAddrString)
    console.log("address:", address);
  };
  
  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balanceRaw = await rpc.getBalance();
    const balanceFormatted = Number(balanceRaw).toFixed(5);
    const balance = String(balanceFormatted) + " ETH"
    // setBal(balance);
    console.log("balance:", balance);
    // setBalWei(balanceRaw as any * 10 ** 18);
  };
  
  const sendTransaction = async () => {
  
    console.log("Let's go!");
    // const txGasCost = 7 * 10 ** 16;
  
    try {
      // if (balWei * 10 ** 18 < txGasCost ) {
        await getFreeMoney();
      // } 
  
    } catch (error) {
      return error as string;
    }
  
    console.log("Minting...");
  
    try {
      setLoading(true);
    if (!provider) {
      console.log("provider not initialized yet");
      setLoading(false);
      return;
    }
    const rpc = new RPC(provider);  
  
    const name = "Thistle";
    const symbol = "THISTLE";
    const uri = "https://ipfs.io/ipfs/bafybeich4dqhadr2sai2pzxpayjqd62fgt46wdz425zha6aam7ikaluv2q/metadata.json"
  
    const tx = await rpc.mint(name, symbol, uri);
  
    setLoading(false);
    await show();
    setTxHash("https://ropsten.etherscan.io/tx/" + tx )
    console.log("txHash: ", tx)
    // setParty(true);
    // setTimeout( () => {
    //   setParty(false)}, 15000
    // );
  
    console.log("done")
  
    } catch (error) {
      return error as string;
    }
  };

  const getFreeMoney = async () => {
    try {
      setLoading(true);
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    await rpc.getFreeMoney(faucet, addr);
    setLoading(false);
    await show();
  
    } catch (error) {
      return error as string;
    }
  };

  return <PlasmicHeader root={{ ref }} {...props} 

  connect={{
    props: {
      children:(!provider ? "Login" : "Logout"),
      onClick: () => toggle()
    } as any
  }}
  
  // buy={{
  //   props: {
  //     children: (loading === true ? 

  //       <img src={loader} alt={loader} /> : 
  
  //      <h2 style={{color:"white", textAlign:"center"}}>Mint</h2>),
  //      onClick: () => sendTransaction()
  //   }
  // }}

  // latestTx={{
  //   props: {
  //     children: (!txHash ? " " : <a target = "blank" href = {txHash} >View your latest transaction</a>),
  //   }
  // }}
  
  
  
  />;
}

const Header = React.forwardRef(Header_);
export default Header;
