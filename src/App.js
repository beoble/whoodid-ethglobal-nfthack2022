import React, { useEffect } from "react";
import "./App.css";
import {} from "./sdk/metamask";
import ServerDataSource from "./sdk/api";
import MainAppBar from "./presentation/component/appbar";
import { AppContainer, MainHeroContainer } from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";
import styled from "styled-components";
import Post from "./presentation/component/post";

const PostContainer = styled.div`
  padding: 50px 0;
  width: 100%;
`;

function App() {
  const testOpenSea = async () => {
    let server = new ServerDataSource();
    let res = await server.getAccountOpenSea(
      "0xD59134a3E004609f39C601cE6F0739df2cc78240"
    );
    console.log(res);
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
          <Post />
        </PostContainer>
      </MainHeroContainer>
    </AppContainer>
  );
}

export default App;
