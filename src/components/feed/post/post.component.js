import React from "react";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";

import "./post.component.css";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-top-info">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post-bottom">
        <p>{message}</p>
      </div>

      <div className="post-image">
        <img src={image} alt="" />
      </div>

      <div className="post-option">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Link</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post-option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
