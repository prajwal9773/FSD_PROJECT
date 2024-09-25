import React, { useState, useEffect } from 'react';
import { fetchBoards, createBoard, deleteBoard } from './api/boardService';

const BoardManagement = () => {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState('');

 
  useEffect(() => {
    const getBoards = async () => {
      const response = await fetchBoards();
      setBoards(response.data);  
    };
    getBoards();
  }, []);

  // Handle board creation
  const handleCreateBoard = async () => {
    const newBoard = { name: newBoardName, description: "A new board" };
    const response = await createBoard(newBoard);
    setBoards([...boards, response.data]);  // Add the new board to the state
    setNewBoardName('');  // Reset input field
  };


  const handleDeleteBoard = async (boardId) => {
    await deleteBoard(boardId);
    setBoards(boards.filter(board => board._id !== boardId));  // Remove deleted board from the state
  };

  return (
    <div>
      <h1>Board Management</h1>
      
      {/* Create Board */}
      <input 
        type="text" 
        value={newBoardName} 
        onChange={(e) => setNewBoardName(e.target.value)} 
        placeholder="Enter new board name"
      />
      <button onClick={handleCreateBoard}>Create Board</button>
      
      {/* List all boards */}
      <ul>
        {boards.map((board) => (
          <li key={board._id}>
            {board.name} 
            <button onClick={() => handleDeleteBoard(board._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardManagement;
