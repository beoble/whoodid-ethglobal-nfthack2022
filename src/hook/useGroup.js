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
  Mekaverse: "MekaVerse",
  MekaverseFactory: "MekaVerse Factory",
  ScatteredShoeuziVol1: "Scattered shoeuzi Vol.1",
  SecretSocietyOfWhales: "Secret Society of Whales",
  Rarible: "Rarible",
};

export default useGroup;
