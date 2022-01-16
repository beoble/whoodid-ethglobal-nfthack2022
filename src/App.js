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
  PostAespa,
  PostCat,
  PostCoinQuestion,
  PostDog,
  PostFactAboutWhale,
  PostGodOfWar,
  PostGreenSalad,
  PostHiringAd,
  PostHoodie,
  PostKryptonium,
  PostMelvin,
  PostNftArt,
  PostNftProjectAd,
  PostOhDuck,
  PostReadyPlayerOne,
  PostShipDuck,
  PostStayStrong,
  PostSummerWars,
  PostTeen,
  PostVitalik,
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
      element: <PostVitalik />,
      collection: NFTGroup.Whoodid,
      hashtags: [],
    },
    {
      element: <PostGreenSalad />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostMelvin />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.Crypto, HashTags.ETHGlobal],
    },
    {
      element: <PostShipDuck />,
      collection: NFTGroup.Mekaverse,
      hashtags: [HashTags.CryptoChallenge],
    },
    {
      element: <PostHoodie />,
      collection: NFTGroup.Whoodid,
      hashtags: [],
    },
    {
      element: <PostKryptonium />,
      collection: NFTGroup.Whoodid,
      hashtags: [],
    },
    {
      element: <PostFactAboutWhale />,
      collection: NFTGroup.SecretSocietyOfWhales,
      hashtags: [HashTags.Animals],
    },
    {
      element: <PostStayStrong />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.Crypto],
    },
    {
      element: <PostNftArt />,
      collection: NFTGroup.Whoodid,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostNftProjectAd />,
      collection: NFTGroup.Rarible,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostReadyPlayerOne />,
      collection: NFTGroup.Mekaverse,
      hashtags: [HashTags.Metaverse],
    },
    {
      element: <PostOhDuck />,
      collection: NFTGroup.Mekaverse,
      hashtags: [HashTags.CryptoChallenge],
    },
    {
      element: <PostSummerWars />,
      collection: NFTGroup.Mekaverse,
      hashtags: [HashTags.Metaverse],
    },
    {
      element: <PostHiringAd />,
      collection: NFTGroup.Rarible,
      hashtags: [HashTags.ETHGlobal],
    },
    {
      element: <PostCat />,
      collection: NFTGroup.SecretSocietyOfWhales,
      hashtags: [HashTags.Animals],
    },
    {
      element: <PostDog />,
      collection: NFTGroup.SecretSocietyOfWhales,
      hashtags: [HashTags.Animals, HashTags.Crypto],
    },
    {
      element: <PostCoinQuestion />,
      collection: NFTGroup.ScatteredShoeuziVol1,
      hashtags: [HashTags.Crypto],
    },
    {
      element: <PostAespa />,
      collection: NFTGroup.Rarible,
      hashtags: [HashTags.NFT],
    },
    {
      element: <PostGodOfWar />,
      collection: NFTGroup.ScatteredShoeuziVol1,
      hashtags: [],
    },
    {
      element: <PostTeen />,
      collection: NFTGroup.MekaverseFactory,
      hashtags: [],
    },
  ];

  const setPostsWith = (by, filterFunc) => {
    let selectedPosts = [];
    by.forEach((element) => {
      selectedPosts.push(
        ...postList.filter((post) => filterFunc(post, element))
      );
    });
    setPosts([...selectedPosts.map((post) => post.element)]);
  };

  useEffect(() => {
    setPostsWith(groups, (post, element) => post.collection == element);
  }, [groups]);

  useEffect(() => {
    if (hashtags.length > 0) {
      setPostsWith(hashtags, (post, element) =>
        post.hashtags.includes(element)
      );
    } else {
      setPostsWith(groups, (post, element) => post.collection == element);
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
