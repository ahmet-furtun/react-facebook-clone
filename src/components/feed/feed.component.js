import React from 'react';

import StoryReel from './story-reel/story-reel.component';
import PostSender from './post-sender/post-sender.component';
import Post from './post/post.component';

import './feed.component.css';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <PostSender/>
            <Post profilePic="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" message="Post works!" timestamp="This is a time stamp" username="Luwary" image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
            <Post profilePic="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" message="Post works!" timestamp="This is a time stamp" username="Luwary" image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
            <Post profilePic="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" message="Post works!" timestamp="This is a time stamp" username="Luwary" image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
        </div>
    )
}

export default Feed;
