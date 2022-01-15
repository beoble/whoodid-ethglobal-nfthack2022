import React, { useEffect, useState } from "react";
import { MaterialProfileDrawer } from "./profileDrawer.style";
import useWallet from "../../../hook/useWallet";

const ProfileDrawer = ({ isProfileDrawerOpen, setIsProfileDrawer }) => {
  const { connected } = useWallet();
  return (
    <MaterialProfileDrawer
      open={isProfileDrawerOpen}
      anchor="right"
      onClose={() => setIsProfileDrawer(false)}
    >
      {connected ? <div></div> : "Please Connect to wallet"}
    </MaterialProfileDrawer>
  );
};

export default ProfileDrawer;
