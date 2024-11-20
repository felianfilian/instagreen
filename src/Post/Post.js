import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <p className="post-title">{props.title}</p>
      <p className="post-text">{props.text}</p>
      <div className="icon-bar">
        <img src="./img/icons/comment.png"></img>
      </div>
    </div>
  );
}

export default Post;
