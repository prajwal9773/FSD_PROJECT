import React, { useState, useEffect } from "react";
import "./css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
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
        const response = await fetch("http://localhost:5000/api/boards");
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

  // Function to handle board deletion
  const handleDelete = async (boardId) => {
    // Confirm deletion (optional)
    if (window.confirm("Are you sure you want to delete this board?")) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/boards/${boardId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete the board");
        }
        // Remove the deleted board from state
        setBoards((prevBoards) =>
          prevBoards.filter((board) => board._id !== boardId)
        );
      } catch (error) {
        console.error("Failed to delete board:", error);
      }
    }
  };

  return (
    <div className="side">
      <div className="sidebar">
        <p className="heading">Workspace</p>
        <div className="boardlist">
          <div className="members">
            <div
              className="mem"
              id="box"
              onClick={() => onContentChange("members")}
            >
              <FontAwesomeIcon icon={faUser} className="memb" />
              <p>Members</p>
            </div>
            <div className="plus">+</div>
          </div>
          <div>
            <div className="workspace" onClick={toggleDropdown} id="box">
              <div className="settings">
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
          </div>
          <div className="views">
            <h5 className="vie">Workspace Views</h5>
            <div className="view">
              <div
                className="table"
                id="box"
                onClick={() => onContentChange("table")}
              >
                <FontAwesomeIcon icon={faTable} className="tab" />
                <p>Table</p>
              </div>
              <div
                className="table"
                id="box"
                onClick={() => onContentChange("calendar")}
              >
                <FontAwesomeIcon icon={faCalendar} className="tab" />
                <p>Calendar</p>
              </div>
            </div>
          </div>
          <div className="newboard">
            <p style={{ fontWeight: "bold", cursor: "pointer" }}>Boards</p>
            <div className="plus" onClick={() => onContentChange("Board")}>
              +
            </div>
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
                    <span
                      className="ellipsis"
                      onClick={() =>
                        setShowDeleteOptions(
                          showDeleteOptions === board._id ? null : board._id
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </span>
                  </div>
                  {showDeleteOptions === board._id && (
                    <div className="delete-option">
                      <button onClick={() => handleDelete(board._id)}>
                        Delete
                      </button>
                    </div>
                  )}
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
