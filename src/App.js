import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid-layout">
        <div className="grid-item top-left" >
          <img className="pic" src="/my-portfolio/images/homepage-background_left_top.jpg" alt="left-top"/>
        </div>
        <div className="grid-item top-right">
          <img className="pic" src="/my-portfolio/images/homepage-background_right_top.jpg" alt="right-top"/>
        </div>
        <div className="grid-item center">
          <img className="pic" src="/my-portfolio/images/homepage-background_mid.jpg" alt="center"/>
          <img 
          src={require("./images/profile-pic.jpg")}
          alt="My portrait"
          className="avatar"
        />
        </div>
        <div className="grid-item bottom-left">
          <img className="pic" src="/my-portfolio/images/homepage-background_left_bottom.jpg" alt="right-bottom"/>
        </div>
        <div className="grid-item bottom-right">
          <img className="pic" src="/my-portfolio/images/homepage-background_right_bottom.jpg" alt="right-bottom"/>
        </div>
      </div>
      {/* <header>
        <p className="homepage-title">Hello, I'm Jiazhou 👋</p>
        <p className="homepage-subtitle">Welcome to my portfolio</p>
        <img
          src={require("./images/profile-pic.jpg")}
          alt="My portrait"
          className="avatar"
        />
      </header> */}
    </div>
  );
}

export default App;
