import React, { useState, useEffect, useContext } from "react";
import NFTProfileSampleImage from "../assets/nft/hood512.png";
import { ProfileContext } from "../contexts/profileContext";

const useProfile = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  return { profile, setProfile };
};

export const defaultProfile = {
  name: "Kryptonium.eth",
  profilePicture: NFTProfileSampleImage,
  description: "I am a lonely white wolf - interested in women",
  isVerified: true,
  nftCollection: [
    "https://lh3.googleusercontent.com/Qls8qYF7Gbgev3ceQXo5wJ_sShclxl7MwWkpmQ_aRBC3qBLjawZJ17_GT45GzO1kUEiqRpOTUrPR4sLF-f0I9IiUywuqEkM5JAP5",
    "https://lh3.googleusercontent.com/fLMivNtc1uMXfaC437UBu0EWxXqdg4nA8jBXQ9tv4ieTjbJJ8jPgZDsddW2U8LvdmJpFPU7PF3ljk1lvtFzwUDpHpjpVx8AEMvzY",
  ],
};

export default useProfile;
