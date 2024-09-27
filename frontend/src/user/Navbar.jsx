import React, { useState } from "react";
import "./css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import PlanityImage from "./img/planity.png";


const Navbar = ({username}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const profileInitials = username ? username.slice(0, 2).toUpperCase() : "PR";
  return (
    <nav className="user-navbar">
      <div className="navbar-logo"><img src={PlanityImage} alt="Planity Logo" style={{ height: "30px", width: "30px", marginTop: "5px", marginRight: "8px", marginLeft:"10px" }} />Planity</div>
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
        
        <div class="box3">
          <div class="btn btn-three">
            <span>Upgrade to Pro</span>
          </div>
        </div>
        <div className="profile-section" onClick={toggleDropdown}>
          <p className="profile-icon">{profileInitials}</p>
        </div>
      </div>

      <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
      <a href="/da" className="dropdown-item">
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
