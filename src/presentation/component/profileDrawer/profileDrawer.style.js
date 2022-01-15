import styled from "styled-components";
import { Drawer } from "@mui/material";

export const MaterialProfileDrawer = styled(Drawer)`
  &.MuiDrawer-root {
    z-index: 910;
  }
  & .MuiDrawer-paper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    width: 500px;
    height: calc(100vh - 72px);
    padding-top: 72px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
