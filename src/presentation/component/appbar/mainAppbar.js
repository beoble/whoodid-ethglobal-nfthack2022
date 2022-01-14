import React from "react";
import {MaterialAppBar, MaterialAppBarLogo, MaterialConnectButton,} from "./mainAppbar.style";

import WhoodidLogoImage from "../../../assets/whoodid-logo.png";


const MainAppBar = () => {
    return (
        <MaterialAppBar>
            <MaterialAppBarLogo>
                <img src={WhoodidLogoImage} alt="Whoodid Logo" width={300}/>
            </MaterialAppBarLogo>
            <MaterialConnectButton>
                CONNECT TO WALLET
            </MaterialConnectButton>
        </MaterialAppBar>
    );
};

export default MainAppBar;
