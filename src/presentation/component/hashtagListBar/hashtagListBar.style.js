import styled from "styled-components";
import { List, ListItem, ListItemButton } from "@mui/material";

export const HashtagList = styled(List)`
  &.MuiList-root {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    width: 250px;
    height: calc(100vh - 72px);
    overflow-Y: scroll;
    margin-top: 72px;
    background-color: white;
    z-index: 910;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 2px;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #71b67f;
      transition: 0.5s;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-track {
      background: lightgray;
    }
  }
`;

export const HashtagListItem = styled(ListItem)`
  &.MuiListItem-root {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    margin: 1px 0;

    &.Mui-selected {
      background-color: darkgreen;
    }
  }
`;
