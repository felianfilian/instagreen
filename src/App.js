import logo from "./logo.svg";
import Post from "./Post/Post";
import Footer from "./Footer/Footer";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="title">Instagreen</h1>
      <p>Posts {3 + 5}</p>
      <div className="post-container">
        <Post title="hello world" text="this is my first test text" />
        <Post title="sansibar" />
        <Post title="egypt" />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
