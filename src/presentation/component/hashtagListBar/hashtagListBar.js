import React, { useEffect, useState } from "react";
import {
  Avatar,
  Checkbox,
  InputAdornment,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import {
  BarWrapper,
  HashtagList,
  HashtagListItem,
} from "./hashtagListBar.style";
import SearchIcon from "@mui/icons-material/Search";
import Emoji from "../../../util/Emoji";

const HashtagListBar = () => {
  const [hashtagList, setHashtagList] = useState([]);

  const initialFetchedValue = [
    { name: "NFT", traits: ['🔥', '🚀'], isSelected: false },
    { name: "ETHGlobal", traits: ['🚀'],hooders: 4444, isSelected: false },
    { name: "Metaverse", traits: ['🔥'], hooders: 5555, isSelected: false },
    { name: "CryptoChallenge", traits: ['🔥', '🚀'], hooders: 6666, isSelected: false },
  ];

  useEffect(() => {
    setHashtagList(initialFetchedValue);
  }, []);

  const updateHashtagListSelection = (index) => {
    let newArr = [...hashtagList];
    newArr[index] = {
      ...newArr[index],
      isSelected: !hashtagList[index].isSelected,
    };
    setHashtagList(newArr);
  };

  const hashtagCard = (hashtag, index) => {
    return (
      <HashtagListItem
        disablePadding
        onClick={() => {
          updateHashtagListSelection(index);
        }}
        selected={hashtag.isSelected}
      >
        <ListItemButton>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={hashtag.name} />
            {hashtag.traits.map((trait, i) => {
                return <Emoji key={i} symbol={trait} />
            })}
        </ListItemButton>
      </HashtagListItem>
    );
  };
  return (
    <BarWrapper>
      <TextField
        placeholder={"Search Hashtag..."}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <HashtagList>
        {hashtagList.map((hashtag, index) => {
          return hashtagCard(hashtag, index);
        })}
      </HashtagList>
    </BarWrapper>
  );
};

export default HashtagListBar;
