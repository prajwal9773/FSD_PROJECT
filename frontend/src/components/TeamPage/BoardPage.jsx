import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BoardPage = () => {
  const { id } = useParams(); // Get the board ID from the URL
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/boards/${id}`);
        if (!response.ok) throw new Error('Failed to fetch board');
        const data = await response.json();
        setBoard(data);
      } catch (error) {
        console.error("Error fetching board:", error);
      }
    };

    fetchBoard();
  }, [id]); // Depend on `id`

  if (!board) return <p>Loading...</p>; // Show loading while fetching

  return (
    <div>
      <h1>{board.name}</h1>
      <p>Template: {board.template}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default BoardPage;
