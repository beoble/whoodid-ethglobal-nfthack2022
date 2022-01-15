import React, { useEffect } from "react";
import "./App.css";
import {} from "./sdk/metamask";
import ServerDataSource from "./sdk/api";
import MainAppBar from "./presentation/component/appbar";
import { AppContainer, MainHeroContainer } from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";
import styled from "styled-components";
import Post from "./presentation/component/post";
import Coolcat279 from "./assets/nft/coolcat279.png";
import Coolcat7795 from "./assets/nft/coolcat7795.png";

import Typography from "@mui/material/Typography";

const PostContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  background-color: #00000015;
`;

const PostGreenSalad = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hi, I got another{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #coolcat
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      profile={Coolcat279}
      name="greensalad.eth"
      isVerified
      content={<Content />}
      image={Coolcat7795}
    />
  );
};

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
        <PostContainer>
          <PostGreenSalad />
        </PostContainer>
      </MainHeroContainer>
    </AppContainer>
  );
}

export default App;
