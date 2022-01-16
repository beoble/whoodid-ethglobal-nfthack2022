import { createContext } from "react";

export const drawerContext = createContext({
  isDrawerOpen: {},
  setIsDrawerOpen: () => {},
});
