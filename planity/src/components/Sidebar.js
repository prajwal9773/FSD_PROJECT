import React, { useState } from "react";
import "../css/Sidebar.css";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="side">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button onClick={toggleSidebar}>{isOpen ? '←' : '→'}</button>
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
