import React from "react";
import Board from"./Board.js"
import "./css/MiddleContent.css";
const MiddleContent = ({ content }) => {
  return (
    <div>
      <div className="container1">
        {content === "members" && <div>Welcome to the Home Page!</div>}
        {content === "Board" && <Board/>}
      
      </div>
    </div>
  );
};
export default MiddleContent;
