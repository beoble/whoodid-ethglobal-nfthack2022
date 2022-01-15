import React, { useEffect, useState } from "react";
import {MaterialProfileDrawer} from "./profileDrawer.style";

const ProfileDrawer = ({ isProfileDrawerOpen, setIsProfileDrawer }) => {
  return (
      <MaterialProfileDrawer open={isProfileDrawerOpen} anchor="right" onClose={() => setIsProfileDrawer(false)}>
        fuck you sex
      </MaterialProfileDrawer>
  );
};

export default ProfileDrawer;
