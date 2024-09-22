import React from "react";
import "../css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="side">
      <div className="sidebar">
        <p className="heading">Workspace</p>
        <div className="boardlist">
        <p>Boards List</p>
        <div className="plus">+</div>
      </div>
      </div>
    </div>
  );
};
export default Sidebar;
