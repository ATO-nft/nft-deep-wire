/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useEffect, useState } from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/nft_deep_wire/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
// import { Web3Auth } from "@web3auth/web3auth";
// import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
// import RPC from "./web3/ethersRPC";
// import "../App.css";
// import { shortenAddress} from '@usedapp/core'
// import loader from './web3/loader.svg';
// // import Confetti from 'react-confetti';

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {

 

  return <PlasmicHomepage root={{ ref }} {...props} 

  

  />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
