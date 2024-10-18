import logo from "./logo.svg";
import Post from "./Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Instagreen</h1>
      <p>Posts {3 + 5}</p>
      <Post />
    </div>
  );
}

export default App;
