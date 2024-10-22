import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <p className="post-title">{props.title}</p>
      <p className="post-text">{props.text}</p>
    </div>
  );
}

export default Post;
