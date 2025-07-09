import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <p className="homepage-title">Hello, I'm Jiazhou 👋</p>
        <p className="homepage-subtitle">Welcome to my portfolio</p>
        <img
          src={require("./images/profile-pic.jpg")}
          alt="My portrait"
          className="avatar"
        />
      </header>
    </div>
  );
}

export default App;
