import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MainAppBar from "./presentation/component/appbar";
import { AppContainer, MainHeroContainer } from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";
import styled from "styled-components";
import HashtagListBar from "./presentation/component/hashtagListBar";
import { NFTGroup } from "./hook/useGroup";
import { HashTags } from "./hook/useHashtag";
import {
  PostGreenSalad,
  PostHoodie,
  PostKryptonium,
  PostMelvin,
  PostShipDuck,
} from "./Posts";
import { WhoodidSdk } from "./sdk/whoodid_sdk";
import { truncateString, converStringArrayToString } from "./util";
import { GroupGontext } from "./contexts/groupContext";
import { HashtagContext } from "./contexts/hashtagContext";
import { WhoodidContext } from "./contexts/whoodidContext";

const PostContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100%;
  background-color: #00000015;
  margin: 72px 250px 0px 260px;
  padding: 0px 2px;
`;

const PostHeader = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: inherit;
  max-width: inherit;
  height: 60px;
  background-color: white;
  padding: 10px 20px;
  z-index: 900;
  vertical-align: middle;
  display: flex;
`;

const Posts = styled.div`
  margin-top: 90px;
`;

function App() {
  const [groups, setGroups] = useState([NFTGroup.Whoodid]);
  const [hashtags, setHashtags] = useState([HashTags]);
  const groupValue = { groups, setGroups };
  const hashtagValue = { hashtags, setHashtags };
  const sdk = new WhoodidSdk();

  axios.interceptors.request.use(
    (config) => {
      console.log(config);
    },
    (error) => {
      console.log(error);
    }
  );

  const testArray = [<PostGreenSalad />, <PostHoodie />];
  const posts = [
    {
      element: <PostGreenSalad />,
      collection: NFTGroup.CoolCats,
      hashtags: [HashTags.NFT],
    },
  ];

  useEffect(() => {
    //testOpenSea();
    sdk.testOpenSea();
  }, []);

  return (
    <GroupGontext.Provider value={groupValue}>
      <HashtagContext.Provider value={hashtagValue}>
        <WhoodidContext.Provider value={{ sdk }}>
          <AppContainer>
            <MainAppBar />
            <MainHeroContainer>
              <SocialClubListBar />
              <PostContainer>
                <PostHeader>
                  <span
                    style={{
                      alignItems: "center",
                      display: "flex",
                      fontSize: "25px",
                    }}
                  >
                    {converStringArrayToString(groups)}
                  </span>
                </PostHeader>
                <Posts>
                  {testArray}
                  <PostGreenSalad />
                  <PostMelvin />
                  <PostShipDuck />
                  <PostHoodie />
                  <PostKryptonium />
                </Posts>
              </PostContainer>
              <HashtagListBar />
            </MainHeroContainer>
          </AppContainer>
        </WhoodidContext.Provider>
      </HashtagContext.Provider>
    </GroupGontext.Provider>
  );
}

export default App;
