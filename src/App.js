import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import {} from "./sdk/metamask";
import ServerDataSource from "./sdk/api";
import { TestConnectDiv } from "./presentation/component/Wallet";
import MainAppBar from "./presentation/component/appbar";
import { AppContainer, MainHeroContainer } from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";
import RecipeReviewCard from "./presentation/component/post";

function App() {
  const testOpenSea = async () => {
    let server = new ServerDataSource();
    let res1 = await server.getAccountOpenSea(
      "0xD59134a3E004609f39C601cE6F0739df2cc78240"
    );
    let res2 = await server.getPriceCovalent(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
    console.log(res1);
    console.log(res2);
    console.log(process.env.REACT_APP_TEST_KEY);
    console.log(process.env.NODE_ENV);
  };

  useEffect(() => {
    testOpenSea();
  }, []);

  return (
    <AppContainer>
      <MainAppBar />
      <MainHeroContainer>
        <SocialClubListBar />
        {/*<TestConnectDiv />*/}
        <RecipeReviewCard />
      </MainHeroContainer>
    </AppContainer>
  );
}

export default App;
