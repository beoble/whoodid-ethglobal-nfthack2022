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
import Select from "react-select";
import { TrapTrap } from "../../../constants";
import useProfile, { defaultProfile } from "../../../hook/useProfile";
import useWhoodid from "../../../hook/useWhoodid";
import Ethereum from "../../../assets/ethereum-eth-logo.png";
import Polygon from "../../../assets/polygon-matic-logo.png";

const chainOptions = [
  {
    value: 1,
    label: (
      <div>
        <img
          src={Ethereum}
          height="15px"
          width="15px"
          style={{ marginRight: "10px" }}
        />
        Ethereum{" "}
      </div>
    ),
  },
  {
    value: 137,
    label: (
      <div>
        <img
          src={Polygon}
          height="15px"
          width="15px"
          style={{ marginRight: "10px" }}
        />
        Ploygon{" "}
      </div>
    ),
  },
];

const MainAppBar = () => {
  const { connect, connected, accounts, ensNames, setDesiredChainId } =
    useWallet();
  const { setIsDrawerOpen } = useDrawer();
  const { getNFTImageUrl } = useWhoodid();

  const { profile, setProfile } = useProfile();

  const [ensName, setEnsName] = useState();
  const [currentNftProfile, setCurrentNftProfile] = useState(
    NFTProfileSampleImage
  );

  const [selectedChain, setSelectedChain] = useState(chainOptions[0]);

  const handleChainChange = (option) => {
    setSelectedChain(option);
    setDesiredChainId(option.value);
  };

  const handleProfileClick = () => {
    setIsDrawerOpen(true);
    setProfileWithAddress(TrapTrap);
  };

  useEffect(() => {
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
          <Select
            options={chainOptions}
            onChange={handleChainChange}
            defaultValue={selectedChain}
          />
          <MaterialConnectButton
            onClick={connect}
            style={{ marginLeft: "10px" }}
          >
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
