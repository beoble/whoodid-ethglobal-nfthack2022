import React, { useEffect, useState } from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { SocialClubList, SocialClubListItem } from "./socialClubListBar.style";
import useGroup from "../../../hook/useGroup";
import useWallet from "../../../hook/useWallet";
import useWhoodid from "../../../hook/useWhoodid";
import { TrapTrap } from "../../../constants";
import Hood from "../../../assets/hoodiepunk.png";

const SocialClubListBar = () => {
  const [socialClubList, setSocialClubList] = useState([]);

  const initialFetchedValue = [
    { name: "Whoodid", hooders: 3333, isSelected: true, image: Hood },
  ];

  useEffect(() => {
    setSocialClubList(initialFetchedValue);
  }, []);

  const updateSocialClubListSelection = (index) => {
    let newArr = [...socialClubList];
    newArr[index] = {
      ...newArr[index],
      isSelected: !socialClubList[index].isSelected,
    };
    setSocialClubList(newArr);
  };

  const { setGroups } = useGroup();
  const { connected, accounts } = useWallet();
  const { getCollectibleList } = useWhoodid();

  useEffect(() => {
    const getCollectibleListAndSet = async () => {
      let collectibles = await getCollectibleList(accounts[0]);
      let socialClubs = collectibles.map((collect) => {
        return {
          name: collect.name,
          image: collect.profile,
          hooders: collect.count,
          isSelected: false,
        };
      });
      setSocialClubList([...initialFetchedValue, ...socialClubs]);
    };
    getCollectibleListAndSet();
  }, [connected]);

  useEffect(() => {
    let selected = socialClubList
      .filter((item) => item.isSelected === true)
      .map((item) => item.name);
    setGroups(selected);
  }, [socialClubList]);

  const socialClubCard = (socialClub, index) => {
    return (
      <SocialClubListItem
        key={socialClub.name}
        disablePadding
        onClick={() => {
          updateSocialClubListSelection(index);
        }}
        selected={socialClub.isSelected}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt="profile"
              src={socialClub.image}
              sx={{ width: 48, height: 48 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={socialClub.name}
            secondary={`${socialClub.hooders} holders`}
          />
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
