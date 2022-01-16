import React, { useEffect, useState } from "react";
import {
  Avatar,
  Checkbox,
  Drawer,
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
  ProfileDrawer,
} from "./hashtagListBar.style";
import SearchIcon from "@mui/icons-material/Search";
import Emoji from "../../../util/Emoji";
import useHashtag from "../../../hook/useHashtag";

const HashtagListBar = () => {
  const [hashtagList, setHashtagList] = useState([]);

  const initialFetchedValue = [
    { name: "NFT", traits: ["🔥", "🚀"], isSelected: false },
    { name: "Crypto", traits: ["🔥", "🚀"], isSelected: false },
    { name: "ETHGlobal", traits: ["🚀"], isSelected: false },
    { name: "Metaverse", traits: ["🔥"], isSelected: false },
    {
      name: "CryptoChallenge",
      traits: ["🔥", "🚀"],
      isSelected: false,
    },
    { name: "Animals", traits: ["🔥"], isSelected: false },
  ];

  const { setHashtags } = useHashtag();

  useEffect(() => {
    setHashtagList(initialFetchedValue);
  }, []);

  useEffect(() => {
    setHashtags(
      hashtagList
        .filter((hashtag) => hashtag.isSelected == true)
        .map((hashtag) => hashtag.name)
    );
  }, [hashtagList]);

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
        key={hashtag.name}
        disablePadding
        onClick={() => {
          updateHashtagListSelection(index);
        }}
        selected={hashtag.isSelected}
      >
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: "30px" }}>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={hashtag.name} />
          {hashtag.traits.map((trait, i) => {
            return <Emoji key={i} symbol={trait} />;
          })}
        </ListItemButton>
      </HashtagListItem>
    );
  };
  return (
    <HashtagList>
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
        sx={{
          width: "220px",
          margin: "10px auto",
          position: "relative",
          zIndex: "10",
        }}
      />
      {hashtagList.map((hashtag, index) => {
        return hashtagCard(hashtag, index);
      })}
    </HashtagList>
  );
};

export default HashtagListBar;
