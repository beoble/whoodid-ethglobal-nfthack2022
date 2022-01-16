import React, { useEffect, useState } from "react";
import useWallet from "../../../hook/useWallet";
import {
  MainNftProfileImage,
  MaterialProfileDrawer,
  OwnedNftImageList,
  ProfileDrawerInnerContainer,
} from "./profileDrawer.style";
import Typography from "@mui/material/Typography";
import OpenSeaVerified from "../../../assets/opensea_verified.png";
import { ImageListItem } from "@mui/material";
import useDrawer from "../../../hook/useDrawer";
import useProfile from "../../../hook/useProfile";

const ProfileDrawer = ({ setCurrentNftProfile, followingHashtags }) => {
  const { connected, accounts } = useWallet();
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();
  const { profile, setProfile } = useProfile();

  const handleNFTClicked = (nft) => {
    if (profile.name == "Kryptonium.eth") {
      setProfile({ ...profile, profilePicture: nft });
      setCurrentNftProfile(nft);
    }
  };

  return (
    <MaterialProfileDrawer
      open={isDrawerOpen}
      anchor="right"
      onClose={() => setIsDrawerOpen(false)}
    >
      {connected ? (
        <ProfileDrawerInnerContainer>
          <MainNftProfileImage
            src={profile.profilePicture}
            alt="main NFT profile"
          />
          <div
            style={{
              display: "flex",
              margin: "30px 0 15px 0",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="text.primary">
              {profile.name}
            </Typography>
            {profile.isVerified && (
              <img
                src={OpenSeaVerified}
                alt="OpenSea verified mark"
                style={{ width: 40, height: 40, margin: "0 5px" }}
              />
            )}
          </div>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ display: "flex", margin: "10px", alignItems: "center" }}
          >
            {profile.description}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              display: "inline-block",
              margin: "10px",
              width: "500px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              wordWrap: "break-word",
            }}
          >
            Following &nbsp;
            {followingHashtags.map((hashtag, index) => {
              return (
                <>
                  {index <= 2 && (
                    <>
                      <a href="" style={{}}>
                        #{hashtag}
                      </a>
                      , &nbsp;
                    </>
                  )}
                </>
              );
            })}
            {followingHashtags.length >= 3 && (
              <a href="">+{followingHashtags.length - 3} MORE...</a>
            )}
          </Typography>
          <OwnedNftImageList sx={{ width: 400, overflowY: 'visible' }} cols={3} rowHeight={400 / 3}>
            {profile.nftCollection.map((ownedNft, index) => {
              return (
                <ImageListItem key={index} sx={{ cursor: "pointer" }}>
                  <img
                    src={`${ownedNft}`}
                    alt={ownedNft}
                    loading="lazy"
                    onClick={() => handleNFTClicked(ownedNft)}
                  />
                </ImageListItem>
              );
            })}
          </OwnedNftImageList>
        </ProfileDrawerInnerContainer>
      ) : (
        <div style={{ margin: "auto" }}>Please Connect To Wallet</div>
      )}
    </MaterialProfileDrawer>
  );
};

export default ProfileDrawer;
