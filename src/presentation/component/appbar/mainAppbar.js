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
import { truncateString } from "../../../util";
import NFTProfileSampleImage from "../../../assets/nft/hood512.png";
import ProfileDrawer from "../profileDrawer";
import PersonIcon from "@mui/icons-material/Person";

const MainAppBar = () => {
  const { connect, connected, accounts, ensNames } = useWallet();
  const [ensName, setEnsName] = useState();
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [currentNftProfile, setCurrentNftProfile] = useState(
    NFTProfileSampleImage
  );

  useEffect(() => {
    if (ensNames) if (ensNames.length > 0) setEnsName(ensNames[0]);
  }, [ensNames]);

  return (
    <MaterialAppBar>
      <AppbarInnerContainer>
        <MaterialAppBarLogo>
          <img src={WhoodidLogoImage} alt="Whoodid Logo" width={250} />
        </MaterialAppBarLogo>
        <ButtonContainer>
          <MaterialConnectButton onClick={connect}>
            {connected
              ? ensName ?? accounts.length > 0
                ? truncateString(accounts[0])
                : "CONNECT TO WALLET"
              : "CONNECT TO WALLET"}
          </MaterialConnectButton>
          {connected ? (
            <ProfileImage
              src={currentNftProfile}
              alt="NFT Profile Image"
              onClick={() => setIsProfileDrawerOpen(true)}
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
              onClick={() => setIsProfileDrawerOpen(true)}
            />
          )}
        </ButtonContainer>
      </AppbarInnerContainer>
      <ProfileDrawer
        isProfileDrawerOpen={isProfileDrawerOpen}
        setIsProfileDrawerOpen={setIsProfileDrawerOpen}
        currentNftProfile={currentNftProfile}
        setCurrentNftProfile={setCurrentNftProfile}
        followingHashtags={['BEER', 'CRYPTO', 'DOGECOIN', 'BEER', 'CRYPTO', 'DOGECOIN']}
      />
    </MaterialAppBar>
  );
};

export default MainAppBar;
