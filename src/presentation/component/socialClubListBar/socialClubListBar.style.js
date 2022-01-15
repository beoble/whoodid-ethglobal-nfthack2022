import styled from "styled-components";
import {List, ListItem, ListItemButton} from "@mui/material";

export const SocialClubList = styled(List)`
  &.MuiList-root {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    overflow-Y: scroll;
    padding: 0;
  }
`

export const SocialClubListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`
