import React from "react";
import "./css/MiddleContent.css";
import Calendar from "./Calendar";
import Board from "./Board.js"
const MiddleContent = ({ content }) => {
  return (
    <div>
      <div className="container1">
        {content === "members" && <div>Welcome to the Home Page!</div>}
        {content === "Profile" && <div>This is your Profile Page.</div>}
        {content === "Settings" && <div>Here are your Settings.</div>}
        {content === "Board" && <Board/>}
        {content === "calendar" && <Calendar />}
      </div>
    </div>
  );
};
export default MiddleContent;
