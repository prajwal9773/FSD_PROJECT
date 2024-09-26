import React, { useState } from "react";
import "./css/Board.css"; // Custom CSS for styling

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [boardName, setBoardName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // Added a loading state
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // Function to open the modal
  const openModal = (templateName) => {
    setSelectedTemplate(templateName);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBoardName("");
    setDescription("");
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const boardData = {
      name: boardName,
      description,
      template: selectedTemplate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/boards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boardData),
      });

      if (response.ok) {
        alert("Board created successfully!");
        closeModal();
      } else {
        alert("Failed to create board");
      }
    } catch (error) {
      console.error("Error creating board:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="workspace-container">
        <div className="workspace-header">
          <h1 className="workspace-title">Planity Workspace</h1>
          <div className="invite-btn">
            <div className="box-3">
                <button onClick={togglePopover} className="butt">Add Members</button>
                {isOpen && (
                  <div className="popover-content">
                    <button onClick={togglePopover} className="close-popover">
                      ✖
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
        <hr />

        <div className="boards-section">
          <h2>Boards</h2>
          <p className="subheading">Most popular templates</p>
          <p className="subtext">Get going faster with the templates</p>

          <div className="template-gallery">
            <div
              className="template-card card1"
              onClick={() => openModal("Basic Board")}
            >
              <h3>Basic Board</h3>
              <p>Template</p>
            </div>
            <div
              className="template-card card2"
              onClick={() => openModal("Kanban")}
            >
              <h3>Kanban</h3>
              <p>Template</p>
            </div>
            <div
              className="template-card card3"
              onClick={() => openModal("Daily Task Management")}
            >
              <h3>Daily Task Management</h3>
              <p>Template</p>
            </div>
            <div
              className="template-card card4"
              onClick={() => openModal("Remote Team Hub")}
            >
              <h3>Remote Team Hub</h3>
              <p>Template</p>
            </div>
          </div>
        </div>

        <div className="Outer-container">
          <div className="filter-section">
            <label>Sort by:</label>
            <select>
              <option>Most recently active</option>
            </select>

            <label>Filter by:</label>
            <select>
              <option>Choose a collection</option>
            </select>
          </div>
        </div>

        {/* Modal for creating a new board */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              {/* Close button */}
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Create Board for {selectedTemplate}</h2>
              <form onSubmit={handleFormSubmit}>
                <label>Board Name</label>
                <input
                  type="text"
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                  required
                  className="input-field"
                />

                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="textarea-field"
                ></textarea>

                <button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create Board"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Board;
