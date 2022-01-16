import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OpenSeaVerified from "../../../assets/opensea_verified.png";
import useDrawer from "../../../hook/useDrawer";
import useProfile from "../../../hook/useProfile";
import useWhoodid from "../../../hook/useWhoodid";

const ExpandMore = styled(IconButton)`
  transform: ${({ expand }) => (!expand ? "rotate(0deg)" : "rotate(180deg)")};
  margin-left: auto;
  transition: transform 1s;
`;

const PostCard = styled(Card)`
  box-sizing: border-box;
  height: fit-content;
  max-width: 500px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 20px;
  min-width: 500px;
`;

export const Comment = ({
  profile,
  name,
  isVerified,
  comment,
  hasMargin = true,
}) => {
  return (
    <CardHeader
      avatar={
        <Avatar
          alt="profile"
          src={profile}
          sx={{ width: 48, height: 48 }}
          onClick={() => {
            console.log("hio");
          }}
        />
      }
      title={
        <div style={{ display: "flex" }}>
          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
          {isVerified && (
            <img src={OpenSeaVerified} style={{ width: 20, margin: "0 5px" }} />
          )}
        </div>
      }
      subheader={comment}
      sx={{ padding: "0", marginBottom: hasMargin ? "20px" : 0 }}
    />
  );
};

export default function Post({
  profile,
  name,
  isVerified,
  content,
  image,
  account,
  comments,
  nftGroup = "Whoodid",
}) {
  const [expanded, setExpanded] = useState(false);
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();
  const { setProfile } = useProfile();
  const { getNFTImageUrl } = useWhoodid();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleProfileClick = async () => {

    let images = await getNFTImageUrl(account);
    setProfile({
      name,
      profilePicture: profile,
      description: "No Description Yet",
      isVerified,
      nftCollection: images,
    });
    setIsDrawerOpen(true);
  };

  return (
    <PostCard sx={{ borderRadius: "10px" }} elevation={1}>
      <CardHeader
        avatar={
          <Avatar
            alt="profile"
            src={profile}
            sx={{ width: 48, height: 48, cursor: "pointer" }}
            onClick={handleProfileClick}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <div style={{ display: "flex" }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            {isVerified && (
              <img
                src={OpenSeaVerified}
                style={{ width: 20, margin: "0 5px" }}
              />
            )}
          </div>
        }
        subheader={"written in " + nftGroup}
        sx={{ padding: "0 0 16px 0" }}
      />

      <CardContent sx={{ padding: "0 0 20px 0" }}>{content}</CardContent>
      {image && (
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Paella dish"
          sx={{ paddingBottom: "20px" }}
        />
      )}
      <CardActions
        disableSpacing
        sx={{ justifyContent: "space-between", padding: "0" }}
      >
        <IconButton aria-label="add to favorites">
          <ThumbUpOutlinedIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleOutlineOutlinedIcon />
        </ExpandMore>
        <IconButton aria-label="share">
          <ShareOutlinedIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments</Typography>
          {comments}
          <Comment
            profile=""
            name="cryptocat.eth"
            isVerified={isVerified}
            comment="wow, your new cat is so cool!"
            hasMargin={false}
          />
        </CardContent>
      </Collapse>
    </PostCard>
  );
}
