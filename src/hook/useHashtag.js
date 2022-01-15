import React, { useState, useEffect, useContext } from "react";
import { HashtagContext } from "../contexts/hashtagContext";

const useHashtag = () => {
  const { hashtags, setHashtags } = useContext(HashtagContext);
  return { hashtags, setHashtags };
};

export const HashTags = {
  NFT: "NFT",
  ETHGlobal: "ETHGlobal",
  Metaverse: "Metaverse",
  CryptoChallenge: "CryptoChallenge",
};

export default useHashtag;
