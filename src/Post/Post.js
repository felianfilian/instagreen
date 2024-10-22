import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <p>{props.title}</p>
    </div>
  );
}

export default Post;
