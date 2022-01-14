import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import {} from "./sdk/metamask";
import ServerDataSource from "./sdk/api";
import MainAppBar from "./presentation/component/appbar";
import {AppContainer, MainHeroContainer} from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";

function App() {
  const testOpenSea = async () => {
    let server = new ServerDataSource();
    let res = await server.getAccountOpenSea(
      "0xD59134a3E004609f39C601cE6F0739df2cc78240"
    );
    console.log(res);
  };

  useEffect(() => {
    testOpenSea();
  }, []);

  return (
    <AppContainer>
      <MainAppBar />
      <MainHeroContainer>
        <SocialClubListBar />
      </MainHeroContainer>
    </AppContainer>
  );
}

export default App;
