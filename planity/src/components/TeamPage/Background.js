import React, { useState } from "react";
import "./css/Background.css";
import wave1 from "./img/1.png";
import wave2 from "./img/2.png";
import wave3 from "./img/3.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MiddleContent from "./MiddleContent";
const Background = () => {
  const [content, setContent] = useState("Home");
  const handleContentChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <div className="container">
       <Navbar />
      <div style={{ display: "flex"}}>
        <div>
        <Sidebar onContentChange={handleContentChange} />
        <MiddleContent content={content} />
        </div>
      </div> 
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
