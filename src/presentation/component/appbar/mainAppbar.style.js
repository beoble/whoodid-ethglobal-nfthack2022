import styled from "styled-components";
import {Button} from "@mui/material";

export const MaterialAppBar = styled.div`
  background: #71b67f;
  box-shadow: none;
  position: fixed;
  align-items: center;
  height: 72px;
  z-index: 999;
  width: 100%;
`;

export const MaterialAppBarLogo = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: flex-start;
  color: inherit;
  width: 15%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
`

export const MaterialConnectButton = styled(Button)`
  &.MuiButton-root {
    font-size: 15px;
    padding: 10px 15px;
    margin: 10px 0;
    color: white;
    background-color: black;
    border-radius: 30px;

    &:hover {
      background-color: black;
      // border: 2px solid #f0b90b;
      color: #f0b90b;
      transition: background-color 0.5s ease;
    }
  }
`;

export const AppbarInnerContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`