import React from "react";
import "./css/MiddleContent.css";
import Calendar from "./Calendar";
import CardLayout from "./CardLayout.jsx";
import Dashboard from "./Dashboard.jsx";
const MiddleContent = ({ content, onAddBoard }) => {
  return (
    <div>
      <div className="container1">
        {typeof content === "string" && content !== "calendar" && content !== "Board" && content !== "dashboard" &&(
          <CardLayout boardName = {content} />
        )}  
        {content === "dashboard" && <Dashboard />}
        {content === "calendar" && <Calendar />}
      </div>
    </div>
  );
};

export default MiddleContent;