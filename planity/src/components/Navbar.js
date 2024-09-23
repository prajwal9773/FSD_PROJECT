import React, { useState } from "react";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="user-navbar">
      <div className="navbar-logo">Planity</div>
      <div className="navbar-items">
        <a href="#boards" className="navbar-item">
          My Boards
        </a>
        <a href="#create" className="navbar-item">
          Create Board
        </a>
      </div>
      <div className="profile">
        <FontAwesomeIcon icon={faBell} className="bell"/>
        
        <div class="box-3">
          <div class="btn btn-three">
            <span>Upgrade to Pro</span>
          </div>
        </div>
        <div className="profile-section" onClick={toggleDropdown}>
          <p className="profile-icon">PR</p>
        </div>
      </div>

      <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
        <a href="#settings" className="dropdown-item">
          Settings
        </a>
        <a href="#logout" className="dropdown-item">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
