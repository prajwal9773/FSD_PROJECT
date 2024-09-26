import React, { useState, useEffect } from "react";
import "./css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faGear,
  faAngleDown,
  faTable,
  faCalendar,
  faEllipsisV, // Add this for the three dots icon
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onContentChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [boards, setBoards] = useState([]); // State to hold board names
  const [showDeleteOptions, setShowDeleteOptions] = useState(null); // State to track which board's delete option to show

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Fetch boards from the API
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/boards");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched boards:", data); // Check the fetched data
        setBoards(data); // Set the board names in state
      } catch (error) {
        console.error("Failed to fetch boards:", error);
      }
    };

    fetchBoards(); // Call the fetch function on component mount
  }, []);

  return (
    <div className="side">
      <div className="sidebar">
        <p className="heading">Workspace</p>
        <div className="boardlist">
          <div className="members">
            <div
              className="mem"
              id="box"
              onClick={() => onContentChange("dashboard")}
            >
              <FontAwesomeIcon icon={faTableColumns} className="memb" />
              <p>Dashboard</p>
            </div>
          </div>
          {/* <div>
            <div className="workspace" onClick={toggleDropdown} id="box">
              <div className="Worksapcesettings" style={{display:"flex",alignItems:'center'}}>
                <FontAwesomeIcon icon={faGear} className="set" />
                <p>Workspace settings</p>
              </div>
              <FontAwesomeIcon icon={faAngleDown} className="down" />
            </div>
            {isOpen && (
              <div className={`dropdown ${isOpen ? "show" : ""}`}>
                <div
                  className="dropdown-option"
                  onClick={() => onContentChange("workspacesettings")}
                >
                  Workspace Settings
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => onContentChange("upgrade")}
                >
                  Upgrade Workspace
                </div>
              </div>
            )}
          </div> */}
          <div className="views">
            <h5 className="vie" style={{fontWeight:"bolder"}}>Workspace Views</h5>
            <div className="view">
              <div
                className="table"
                id="box"
                onClick={() => onContentChange("table")}
                style={{display:"flex",alignItems:'center'}}
              >
                <FontAwesomeIcon icon={faTable} className="tab" />
                <p>Table</p>
              </div>
              <div
                className="table"
                id="box"
                onClick={() => onContentChange("calendar")}
                style={{display:"flex",alignItems:'center'}}
                
              >
                <FontAwesomeIcon icon={faCalendar} className="tab" />
                <p>Calendar</p>
              </div>
            </div>
          </div>
          <div className="newboard">
            <p style={{ fontWeight: "bold", cursor: "pointer" }}>Boards</p>
          </div>

          {/* Display Board Names */}
          <div className="board-names">
            {boards.length > 0 ? (
              boards.map((board) => (
                <div key={board._id} className="board-name" onClick={() => onContentChange(board.name)}>
                  <div>
                    <span>{board.name}</span>
                  </div>
                  <div>
                  </div>
                  
                </div>
              ))
            ) : (
              <p>No boards available</p> // Fallback if no boards are present
            )}
          </div>
        </div>
        <div className="button">
          <button className="button-64">
            <span className="text">Upgrade to Planity Pro</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
