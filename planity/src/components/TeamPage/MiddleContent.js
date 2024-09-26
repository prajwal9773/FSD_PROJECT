import React from "react";
import "./css/MiddleContent.css";
import Calendar from "./Calendar";
import Board from "./Board.js";
import CardLayout from "./CardLayout.js";
import Members from "./Members.js"
const MiddleContent = ({ content, onAddBoard }) => {
  return (
    <div>
      <div className="container1">
        {content === "members" && <Members />}
        {content === "Profile" && <div>This is your Profile Page.</div>}
        {content === "Settings" && <div>Here are your Settings.</div>}
        {typeof content === "string" && content !== "members" && content !== "Profile" && content !== "Settings" && content !== "calendar" && (
          <CardLayout boardName = {content} />
        )}
        {/* Pass onAddBoard function to the Board component */}
        {content === "Board" && <Board onAddBoard={onAddBoard} />}
        
        {content === "calendar" && <Calendar />}
      </div>
    </div>
  );
};

export default MiddleContent;
