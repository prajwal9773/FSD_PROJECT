import React from "react";
import "./css/Board.css"; // Add custom CSS for styling

const Board = () => {
  return (
    <>
      <div className="workspace-container">
        <div className="workspace-header">
          <h1 style={{ fontSize: "xx-large", marginLeft: "50px" }}>
            Planity Workspace
          </h1>
          <div class="box-3">
            <div class="btn btn-three">
              <div>Invite Workspace Members</div>
            </div>
          </div>
        </div>
        <hr />

        <div className="boards-section">
          <h2>Boards</h2>
          <p
            style={{
              marginLeft: "20px",
              fontSize: "x-large",
              marginBottom: "30px",
            }}
          >
            Most popular templates
          </p>
          <p
            style={{
              color: "#9fadbc",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            Get going faster with the templates
          </p>

          <div className="template-gallery">
            <div className="template-card card1">
              <h3 >Basic Board</h3>
              <p >Template</p>
            </div>
            <div className="template-card card2">
              <h3>Kanban </h3>
              <p>Template</p>
            </div>
            <div className="template-card card3">
              <h3 style={{color:'black'}}>Daily Task Management </h3>
              <p style={{color:'black'}}> Template</p>
            </div>
            <div className="template-card card4">
              <h3 style={{color:'black'}}>Remote Team Hub</h3>
              <p style={{color:'black'}}>Template</p>
            </div>
          </div>
        </div>
        <div className="Outer-container">
          <div className="filter-section">
            <label>Sort by:</label>
            <select>
              <option>Most recently active</option>
              {/* Add other options if needed */}
            </select>

            <label>Filter by:</label>
            <select>
              <option>Choose a collection</option>
              {/* Add other options */}
            </select>
          </div>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="  Search boards..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
