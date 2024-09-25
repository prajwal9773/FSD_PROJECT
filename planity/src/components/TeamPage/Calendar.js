import React, { useState, useEffect } from 'react';
import './css/Calendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Today's date
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(new Date())); // Start of this week

  // Function to get the start of the current week (Sunday)
  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    return start;
  }

  useEffect(() => {
    setStartOfWeek(getStartOfWeek(currentDate));
  }, [currentDate]);

  // Handle previous week navigation
  const handlePrevWeek = () => {
    const prevWeek = new Date(startOfWeek);
    prevWeek.setDate(startOfWeek.getDate() - 7);
    setStartOfWeek(prevWeek);
  };

  // Handle next week navigation
  const handleNextWeek = () => {
    const nextWeek = new Date(startOfWeek);
    nextWeek.setDate(startOfWeek.getDate() + 7);
    setStartOfWeek(nextWeek);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevWeek}>{"<"}</button>
        <div>
          {startOfWeek.toLocaleString('default', { month: 'long' })} {startOfWeek.getFullYear()}
        </div>
        <button onClick={handleNextWeek}>{">"}</button>
      </div>

      <div className="calendar-week">
        {daysOfWeek.map((day, index) => {
          const date = new Date(startOfWeek);
          date.setDate(startOfWeek.getDate() + index);

          // Check if this day is today to apply highlighting
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div key={index} className={`calendar-day ${isToday ? 'today' : ''}`}>
              <div className="calendar-day-header">
                <span>{day}</span>
                <span>{date.getDate()}</span>
              </div>
              <div className="calendar-day-body">
                {/* Events or day content can go here */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
