import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

const socialClubCard = () => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
        </ListItem>
    )
}

const SocialClubListBar = () => {
    return (
        <List style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '100%', overflowY: 'scroll'}}>
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
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
            {socialClubCard()}
        </List>
    );
};

export default SocialClubListBar;
