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
  const [posts, setPosts] = useState([]);
  const sdk = new WhoodidSdk();
  const postList = [
    {
      element: <PostGreenSalad />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostMelvin />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostShipDuck />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostHoodie />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostKryptonium />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
  ];

  const setPostsWithGroup = () => {
    let selectedPosts = [];
    groups.forEach((nft) => {
      selectedPosts.push(...postList.filter((post) => post.collection == nft));
    });
    setPosts([...selectedPosts.map((post) => post.element)]);
  };

  useEffect(() => {
    setPostsWithGroup();
  }, [groups]);

  useEffect(() => {
    if (hashtags.length > 0) {
      let selectedPosts = [];
      hashtags.forEach((hashtag) => {
        selectedPosts.push(
          ...postList.filter((post) => post.hashtags.includes(hashtag))
        );
      });
      setPosts([...selectedPosts.map((post) => post.element)]);
    } else {
      setPostsWithGroup();
    }
  }, [hashtags]);

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
                <Posts>{posts}</Posts>
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
