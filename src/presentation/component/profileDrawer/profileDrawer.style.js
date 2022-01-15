import styled from "styled-components";
import {Drawer, ImageList} from "@mui/material";

export const MaterialProfileDrawer = styled(Drawer)`
  &.MuiDrawer-root {
    z-index: 910;
  }
  & .MuiDrawer-paper {
    display: flex;
    flex-direction: column;
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

export const ProfileDrawerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const MainNftProfileImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const OwnedNftImageList = styled(ImageList)`
  
`
