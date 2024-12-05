import React from "react";
import "./Post.css";

function Post(props) {
  const toogleImage = () => {
    alert("toggle");
  };

  const addLike = () => {
    alert("LIKE");
  };

  const addFavorite = () => {
    alert("LIKE");
  };

  const sharePost = () => {
    alert("LIKE");
  };

  return (
    <div className="post">
      <p className="post-title">{props.title}</p>
      <p className="post-text">{props.text}</p>
      <div className="icon-bar">
        <img
          onClick={() => toogleImage()}
          src={require("./../img/icons/comment.png")}
          alt="Comment"
        ></img>
        <img
          onClick={() => addLike()}
          src={require("./../img/icons/heart.png")}
          alt="Like"
        ></img>
        <img
          onClick={() => addFavorite()}
          src={require("./../img/icons/star.png")}
          alt="Favorite"
        ></img>
        <img
          onClick={() => sharePost()}
          src={require("./../img/icons/send.png")}
          alt="Share"
        ></img>
      </div>
    </div>
  );
}

export default Post;
