// import React from "react";
import Homepage from "./components/Homepage";
import Jfe from "./components/Jfe";
import Shades from "./components/Shades";
import Nft from "./components/Nft";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Index() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jfe" element={<Jfe />} />
        <Route path="/shades" element={<Shades />} />
        <Route path="/nft" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default Index;