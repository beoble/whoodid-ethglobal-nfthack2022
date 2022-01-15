import React, { useState, useEffect, useContext } from "react";
import { WhoodidContext } from "../contexts/whoodidContext";

const useWhoodid = () => {
  const { sdk } = useContext(WhoodidContext);

  const getNFTImageUrl = async (address) => {
    return await sdk.getNFTImageUrlsByAddresss(address);
  };

  const getCollectibleList = async (address) => {
    return await sdk.getCollectibleListByAddress(address);
  };

  return { getNFTImageUrl, getCollectibleList };
};

export default useWhoodid;
