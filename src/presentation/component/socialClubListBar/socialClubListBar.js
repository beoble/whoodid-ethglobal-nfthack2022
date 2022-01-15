import React, {useEffect, useState} from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { SocialClubList, SocialClubListItem } from "./socialClubListBar.style";

const SocialClubListBar = () => {
  const [socialClubList, setSocialClubList] = useState([]);

  const initialFetchedValue = [
    { name: "Whoodid", hooders: 3333, isSelected: false },
    { name: "BoredApeYachtClub", hooders: 4444,isSelected: false },
    { name: "Cryptoadz", hooders: 5555,isSelected: false },
    { name: "CryptoPunks", hooders: 6666, isSelected: false },
  ];

  useEffect(() => {
    setSocialClubList(initialFetchedValue);
  }, [])

  const updateSocialClubListSelection = (index) => {
    let newArr = [...socialClubList];
    newArr[index] = {
      ...newArr[index],
      isSelected: !socialClubList[index].isSelected,
    };
    setSocialClubList(newArr);
  }

  const socialClubCard = (socialClub, index) => {
    return (
      <SocialClubListItem
        disablePadding
        onClick={() => {
          updateSocialClubListSelection(index)
        }}
        selected={socialClub.isSelected}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={socialClub.name} secondary={`${socialClub.hooders} Followers`} />
        </ListItemButton>
      </SocialClubListItem>
    );
  };

  return (
    <SocialClubList>
      {socialClubList.map((socialCLub, index) => {
        return socialClubCard(socialCLub, index);
      })}
    </SocialClubList>
  );
};

export default SocialClubListBar;
