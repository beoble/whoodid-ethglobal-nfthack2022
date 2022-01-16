import React, { useState, useEffect, useContext } from "react";
import { drawerContext } from "../contexts/drawerContext";

const useDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(drawerContext);
  return { isDrawerOpen, setIsDrawerOpen };
};

export default useDrawer;
