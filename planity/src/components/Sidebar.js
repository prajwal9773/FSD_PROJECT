import React, { useState } from "react";
import "../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faAngleDown,
  faTable,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="side">
      <div className="sidebar">
        <p className="heading">Workspace</p>
        <div className="boardlist">
          <div className="members">
            <div className="mem">
              <FontAwesomeIcon icon={faUser} className="memb" />
              <p>Members</p>
            </div>
            <div className="plus">+</div>
          </div>
          <div>
            <div className="workspace" onClick={toggleDropdown}>
              <div className="settings">
                <FontAwesomeIcon icon={faGear} className="set" />
                <p>Workspace settings</p>
              </div>
              <FontAwesomeIcon icon={faAngleDown} className="down" />
            </div>
            {isOpen && (
              <div className={`dropdown ${isOpen ? "show" : ""}`}>
                <div className="dropdown-option">Workspace Settings</div>
                <div className="dropdown-option">Upgrade Workspace</div>
              </div>
            )}
          </div>
          <div className="views">
            <h5 className="vie">Workspace Views</h5>
            <div className="view">
              <div className="table">
                <FontAwesomeIcon icon={faTable} className="tab" />
                <p>Table</p>
              </div>
              <div className="table">
                <FontAwesomeIcon icon={faCalendar} className="tab" />
                <p>Calendar</p>
              </div>
            </div>
          </div>
          <div className="newboard">
            <p style={{ fontWeight: "bold" }}>Your Boards</p>
            <div className="plus">+</div>
          </div>
        </div>
        <div className="button">
          <button class="button-64" role="button">
            <span class="text">Upgrade to Planity Pro</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
