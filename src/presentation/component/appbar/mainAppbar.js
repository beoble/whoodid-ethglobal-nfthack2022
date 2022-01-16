import React, { useEffect, useState } from "react";
import {
  AppbarInnerContainer,
  ButtonContainer,
  MaterialAppBar,
  MaterialAppBarLogo,
  MaterialConnectButton,
  ProfileImage,
} from "./mainAppbar.style";
import WhoodidLogoImage from "../../../assets/whoodid-logo.png";
import useWallet from "../../../hook/useWallet";
import useDrawer from "../../../hook/useDrawer";
import { truncateString } from "../../../util";
import NFTProfileSampleImage from "../../../assets/nft/hood512.png";
import ProfileDrawer from "../profileDrawer";
import PersonIcon from "@mui/icons-material/Person";
import { TrapTrap } from "../../../constants";
import useProfile, { defaultProfile } from "../../../hook/useProfile";
import useWhoodid from "../../../hook/useWhoodid";

const MainAppBar = () => {
  const { connect, connected, accounts, ensNames } = useWallet();
  const { setIsDrawerOpen } = useDrawer();
  const { getNFTImageUrl } = useWhoodid();

  const { profile, setProfile } = useProfile();

  const [ensName, setEnsName] = useState();
  const [currentNftProfile, setCurrentNftProfile] = useState(
    NFTProfileSampleImage
  );

  const handleProfileClick = () => {
    setIsDrawerOpen(true);
    setProfileWithAddress(TrapTrap);
  };

  useEffect(() => {
    console.log(ensNames);
    if (ensNames) if (ensNames.length > 0) setEnsName(ensNames[0]);
  }, [ensNames]);

  const setProfileWithAddress = async (address) => {
    let images = await getNFTImageUrl(address);
    if (ensNames)
      setProfile({ ...defaultProfile, name: ensNames, nftCollection: images });
    else setProfile({ ...defaultProfile, nftCollection: images });
  };

  const getAccountStr = () => {
    if (connected) {
      if (ensNames) return ensName;
      else return truncateString(accounts[0]);
    } else return "CONNECT TO WALLET";
  };

  useEffect(() => {
    if (connected) setProfileWithAddress(TrapTrap);
  }, [connected]);

  return (
    <MaterialAppBar>
      <AppbarInnerContainer>
        <MaterialAppBarLogo>
          <img src={WhoodidLogoImage} alt="Whoodid Logo" width={250} />
        </MaterialAppBarLogo>
        <ButtonContainer>
          <MaterialConnectButton onClick={connect}>
            {getAccountStr()}
          </MaterialConnectButton>
          {connected ? (
            <ProfileImage
              src={currentNftProfile}
              alt="NFT Profile Image"
              onClick={handleProfileClick}
            />
          ) : (
            <PersonIcon
              style={{
                width: "40px",
                height: "40px",
                background: "black",
                color: "white",
                borderRadius: "50%",
                marginLeft: "10px",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={handleProfileClick}
            />
          )}
        </ButtonContainer>
      </AppbarInnerContainer>
      <ProfileDrawer
        setIsProfileDrawerOpen={setIsDrawerOpen}
        currentNftProfile={currentNftProfile}
        setCurrentNftProfile={setCurrentNftProfile}
        followingHashtags={[
          "BEER",
          "CRYPTO",
          "DOGECOIN",
          "BEER",
          "CRYPTO",
          "DOGECOIN",
        ]}
      />
    </MaterialAppBar>
  );
};

export default MainAppBar;
