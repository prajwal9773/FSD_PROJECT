import React from "react";
import "../css/Background.css";
import wave1 from "../img/1.png";
import wave2 from "../img/2.png";
import wave3 from "../img/3.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
function Background() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className="line line-1">
        <div
          className="wave wave1"
          style={{ backgroundImage: `url(${wave1})` }}
        ></div>
      </div>
      <div className="line line-2">
        <div
          className="wave wave2"
          style={{ backgroundImage: `url(${wave2})` }}
        ></div>
      </div>
      <div className="line line-3">
        <div
          className="wave wave3"
          style={{ backgroundImage: `url(${wave3})` }}
        ></div>
      </div>
    </div>
  );
}
export default Background;
