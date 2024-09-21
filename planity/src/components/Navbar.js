import React, { useState } from "react";
import "../css/Navbar.css"; // Optional: Add your CSS file

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
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
      <div className="profile-section" onClick={toggleDropdown}>
        <span className="profile-icon">PR</span> {/* Profile initials */}
      </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
        <a href="#settings" className="dropdown-item">Settings</a>
        <a href="#logout" className="dropdown-item">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
