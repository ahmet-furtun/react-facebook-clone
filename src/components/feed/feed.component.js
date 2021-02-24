import React, { useEffect, useState } from "react";

import StoryReel from "./story-reel/story-reel.component";
import PostSender from "./post-sender/post-sender.component";
import Post from "./post/post.component";

import db from "../../firebase";

import "./feed.component.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <PostSender />

      {posts.map(post => (
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
      />
      ))}
    </div>
  );
};

export default Feed;
