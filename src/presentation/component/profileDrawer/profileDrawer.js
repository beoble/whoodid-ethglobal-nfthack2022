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
import useWhoodid from "../../../hook/useWhoodid";
import { TrapTrap } from "../../../constants";

const ProfileDrawer = ({
  isProfileDrawerOpen,
  setIsProfileDrawerOpen,
  currentNftProfile,
  setCurrentNftProfile,
  name,
  isVerified,
  nftCollection,
  followingHashtags,
}) => {
  const [profile, setProfile] = useState({
    name: "Kryptonium.eth",
    description: "I am a lonely white wolf - interested in women",
    isVerified: true,
    nftCollection: [
      "https://lh3.googleusercontent.com/Qls8qYF7Gbgev3ceQXo5wJ_sShclxl7MwWkpmQ_aRBC3qBLjawZJ17_GT45GzO1kUEiqRpOTUrPR4sLF-f0I9IiUywuqEkM5JAP5",
      "https://lh3.googleusercontent.com/fLMivNtc1uMXfaC437UBu0EWxXqdg4nA8jBXQ9tv4ieTjbJJ8jPgZDsddW2U8LvdmJpFPU7PF3ljk1lvtFzwUDpHpjpVx8AEMvzY",
    ],
  });

  const { connected, accounts } = useWallet();
  const { getNFTImageUrl } = useWhoodid();

  useEffect(() => {
    if (accounts) {
      if (accounts[0]) console.log(accounts[0]);
    }
  }, [accounts]);

  useEffect(() => {
    const setProfileWithAddress = async () => {
      let images = await getNFTImageUrl(TrapTrap);
      setProfile({ ...profile, nftCollection: images });
    };
    if (connected) {
      setProfileWithAddress();
    }
  }, [connected]);

  return (
    <MaterialProfileDrawer
      open={isProfileDrawerOpen}
      anchor="right"
      onClose={() => setIsProfileDrawerOpen(false)}
    >
      {connected ? (
        <ProfileDrawerInnerContainer>
          <MainNftProfileImage src={currentNftProfile} alt="main NFT profile" />
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
          <OwnedNftImageList sx={{ width: 400 }} cols={3} rowHeight={400 / 3}>
            {profile.nftCollection.map((ownedNft, index) => {
              return (
                <ImageListItem key={index} sx={{ cursor: "pointer" }}>
                  <img
                    src={`${ownedNft}`}
                    alt={ownedNft}
                    loading="lazy"
                    onClick={() => setCurrentNftProfile(ownedNft)}
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
