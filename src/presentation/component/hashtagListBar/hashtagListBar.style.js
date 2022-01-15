import styled from "styled-components";
import {List, ListItem, ListItemButton} from "@mui/material";

export const HashtagList = styled(List)`
  &.MuiList-root {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    width: 200px;
    height: calc(100vh - 72px);
    overflow-Y: scroll;
    padding: 0;
    margin-top: 72px;
    background-color: white;
    z-index: 910;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #71b67f;
      transition: .5s;
      height: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-track {
      background: lightgray;
    }
  }
`

export const HashtagListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`
