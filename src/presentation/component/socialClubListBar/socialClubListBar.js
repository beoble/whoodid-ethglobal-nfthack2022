import React, { useEffect, useState } from "react";
import {
  Avatar,
  Checkbox,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { SocialClubList, SocialClubListItem } from "./socialClubListBar.style";
import useGroup from "../../../hook/useGroup";

const SocialClubListBar = () => {
  const initialValue = [
    { name: "Whoodid", selected: false },
    { name: "BoredApeYachtCLub", selected: false },
    { name: "Cryptoadz", selected: false },
    { name: "CryptoPunks", selected: false },
  ];

  const [selectedFlag, setSelectedFlag] = useState(initialValue);

  const {setGroups} = useGroup();

  useEffect(() => {
    let selected = selectedFlag.filter((item)=>item.selected === true).map((item)=>item.name);
    console.log(selected);
    setGroups(selected)
  }, [selectedFlag])

  const socialClubCard = (socialClub, index) => {
    return (
      <SocialClubListItem
        disablePadding
        onClick={() => {
          let newArr = [...selectedFlag];
          newArr[index] = {
            name: selectedFlag[index].name,
            selected: !selectedFlag[index].selected,
          };
          setSelectedFlag(newArr);
        }}
        selected={selectedFlag[index].selected}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={socialClub.name} secondary="3333 Followers" />
        </ListItemButton>
      </SocialClubListItem>
    );
  };

  return (
    <SocialClubList>
      {selectedFlag.map((socialCLub, index) => {
        return socialClubCard(socialCLub, index);
      })}
    </SocialClubList>
  );
};

export default SocialClubListBar;
