import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import {} from "./sdk/metamask";
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
import { testOpenSea } from "./sdk/whoodid_sdk";
import { truncateString } from "./util";

const PostContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: fit-content;
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

export const GroupGontext = createContext({
  groups: [],
  setGroups: () => {},
});

export const HashtagContext = createContext({
  hashtags: [],
  setHashtags: () => {},
});

function App() {
  const [groups, setGroups] = useState([NFTGroup.Whoodid]);
  const [hashtags, setHashtags] = useState([HashTags]);
  const groupValue = { groups, setGroups };

  useEffect(() => {
    testOpenSea();
    console.log(groups);
  }, []);

  return (
    <GroupGontext.Provider value={groupValue}>
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
                {truncateString(
                  groups.toString().replace(/,/g, ", "),
                  35,
                  30,
                  0
                )}
              </span>
            </PostHeader>
            <Posts>
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
    </GroupGontext.Provider>
  );
}

export default App;
