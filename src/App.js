import logo from "./logo.svg";
import Post from "./Post/Post";
import "./App.css";

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
    </div>
  );
}

export default App;
