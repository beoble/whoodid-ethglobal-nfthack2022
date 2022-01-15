import React from "react";
import {Avatar, Checkbox, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import {HashtagList, HashtagListItem} from "./hashtagListBar.style";

const hashtagCard = () => {
    return (
        <HashtagListItem
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <TagIcon />
                </ListItemIcon>
                <ListItemText primary="Social Club"/>
            </ListItemButton>
        </HashtagListItem>
    )
}

const HashtagListBar = () => {
    return (
        <HashtagList>
            {hashtagCard()}
            {hashtagCard()}
            {hashtagCard()}
            {hashtagCard()}
            {hashtagCard()}
            {hashtagCard()}
        </HashtagList>

    );
};

export default HashtagListBar;
