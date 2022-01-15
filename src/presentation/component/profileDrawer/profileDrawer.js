import React, { useEffect, useState } from "react";
import useWallet from "../../../hook/useWallet";
import {
  MainNftProfileImage,
  MaterialProfileDrawer,
  ProfileDrawerInnerContainer,
} from "./profileDrawer.style";
import NFTProfileSampleImage from "../../../assets/nft/hood512.png";
import Typography from "@mui/material/Typography";
import OpenSeaVerified from "../../../assets/opensea_verified.png";

const ProfileDrawer = ({
  isProfileDrawerOpen,
  setIsProfileDrawer,
  currentNftProfile,
  name,
  isVerified,
  nftCollection,
}) => {
  // Mock
  name = "Kryptonium.eth";
  isVerified = true;
  nftCollection = [];
  const { connected } = useWallet();

  return (
    <MaterialProfileDrawer
      open={isProfileDrawerOpen}
      anchor="right"
      onClose={() => setIsProfileDrawer(false)}
    >
      {connected ? (
        <ProfileDrawerInnerContainer>
          <MainNftProfileImage
            src={NFTProfileSampleImage}
            alt="main NFT profile"
          />
          <div
            style={{ display: "flex", margin: "30px 0", alignItems: "center" }}
          >
            <Typography variant="h4" color="text.secondary">
              {name}
            </Typography>
            {isVerified && (
              <img
                src={OpenSeaVerified}
                alt="OpenSea verified mark"
                style={{ width: 40, height: 40, margin: "0 5px" }}
              />
            )}
          </div>
        </ProfileDrawerInnerContainer>
      ) : (
        "Please Connect To Wallet"
      )}
    </MaterialProfileDrawer>
  );
};

export default ProfileDrawer;
