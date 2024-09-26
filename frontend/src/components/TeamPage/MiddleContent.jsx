import React from "react";
import "./css/MiddleContent.css";
import Calendar from "./Calendar";
import Board from "./Board.jsx";
import CardLayout from "./CardLayout.jsx";
import Members from "./Members.jsx"
const MiddleContent = ({ content, onAddBoard }) => {
  return (
    <div>
      <div className="container1">
        {/* {content === "members" && <Members />} */}
        {content === "Settings" && <div>Here are your Settings.</div>}
        {typeof content === "string" && content !== "calendar" && content !== "Board" && content !== "dashboard" &&(
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
