import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Dashboard.css'; // Ensure this path is correct

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  // Fetch boards and cards from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardsResponse = await axios.get('http://localhost:3000/api/boards');
        const cardsResponse = await axios.get('http://localhost:3000/cards');
        setBoards(boardsResponse.data);
        setCards(cardsResponse.data);
      } catch (error) {
        console.error('Error fetching boards or cards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1 style={{fontWeight:"bolder",fontSize:"larger"}}>Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h3>Total number of Boards: {boards.length}</h3> {/* Display total boards */}
          <strong>All boards</strong>
          <ul>
            {boards.map((board) => (
              <li key={board._id}>
                <strong>{board.name}</strong> {/* Board name */}
              </li>
            ))}
          </ul>
        </div>
        <div className="stat" style={{height:"100px"}}>
          <h3>Total Cards: {cards.length}</h3> {/* Display total cards */}
        </div>
        <div className='stat' style={{height:"200px"}}>
          <h3>Members in the board</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
