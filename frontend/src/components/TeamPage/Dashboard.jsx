import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // Import Line chart from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './css/Dashboard.css';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [stockData, setStockData] = useState(null);

  // Fetch boards, cards, and stock data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch boards and cards (replace with your API)
        const boardsResponse = await axios.get('http://localhost:3000/api/boards');
        const cardsResponse = await axios.get('http://localhost:3000/cards');

        setBoards(boardsResponse.data);
        setCards(cardsResponse.data);

        // Fetch stock data (You can replace this with real API)
        const mockStockData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Stock Price',
              data: [150, 160, 170, 155, 165, 175, 180], // Mock stock prices
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
              tension: 0.1,
            },
          ],
        };
        setStockData(mockStockData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h3>Total Boards: {boards.length}</h3>
          <ul>
            {boards.map((board) => (
              <li key={board._id}>
                <strong>{board.name}</strong>
                <ul>
                  {cards
                    .filter((card) => card.boardId === board._id)
                    .map((card) => (
                      <li key={card._id}>{card.title}</li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* Stock Chart Section
      <div className="stock-chart">
        <h2 style={{color:"black"}}>Stock Prices</h2>
        {stockData ? (
          <Line data={stockData} />
        ) : (
          <p>Loading stock data...</p>
        )}
      </div> */}
      <div className="stat" style={{height:"50px"}}>
          <h3>Total Cards: {cards.length}</h3>
        </div>
    </div>
  );
};

export default Dashboard;
