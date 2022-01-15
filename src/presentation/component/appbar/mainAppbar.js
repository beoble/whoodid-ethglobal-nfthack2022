import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  MaterialAppBar,
  MaterialAppBarLogo,
  MaterialConnectButton,
} from "./mainAppbar.style";

import WhoodidLogoImage from "../../../assets/whoodid-logo.png";
import useWallet from "../../../hook/useWallet";
import { truncateString } from "../../../util";

const MainAppBar = () => {
  const { connect, connected, accounts, ensNames } = useWallet();
  const [ensName, setEnsName] = useState();

  useEffect(() => {
    if (ensNames) if (ensNames.length > 0) setEnsName(ensNames[0]);
  }, [ensNames]);

  return (
    <MaterialAppBar>
      <MaterialAppBarLogo>
        <img src={WhoodidLogoImage} alt="Whoodid Logo" width={300} />
      </MaterialAppBarLogo>
      <ButtonContainer>
        <MaterialConnectButton onClick={connect}>
          {connected
            ? ensName ?? truncateString(accounts[0])
            : "CONNECT TO WALLET"}
        </MaterialConnectButton>
      </ButtonContainer>
    </MaterialAppBar>
  );
};

export default MainAppBar;
