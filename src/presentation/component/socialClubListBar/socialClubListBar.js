import React from "react";
import {Avatar, Checkbox, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import {SocialClubList, SocialClubListItem} from "./socialClubListBar.style";

const socialClubCard = () => {
    return (
        <SocialClubListItem
            secondaryAction={
                <Checkbox
                    edge="end"
                />
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Social Club" secondary="3333 Followers"/>
            </ListItemButton>
        </SocialClubListItem>
    )
}

const SocialClubListBar = () => {
    return (
        <SocialClubList>
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
        </SocialClubList>

    );
};

export default SocialClubListBar;
