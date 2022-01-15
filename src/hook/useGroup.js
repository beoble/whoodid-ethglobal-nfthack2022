import React, { useState, useEffect, useContext } from "react";
import { GroupGontext } from "../contexts/groupContext";

const useGroup = () => {
  const { groups, setGroups } = useContext(GroupGontext);
  return { groups, setGroups };
};

export const NFTGroup = {
  Whoodid: "Whoodid",
  BoredApeYachtClub: "BoredApeYachtClub",
  Cryptoadz: "Cryptoadz",
  CryptoPunk: "CryptoPunk",
  CoolCats: "CoolCats",
  Mekaverse: "Mekaverse",
};

export default useGroup;
