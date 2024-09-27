import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SelectionPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle navigation to /user
  const goToUserPage = () => {
    navigate('/user');
  };

  // Handle navigation to /login/teamleader
  const goToTeamLeaderPage = () => {
    navigate('/logi/teamleader');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl text-white font-bold mb-8">Select Your Role</h1>
      <div className="flex space-x-8">
        {/* User Div */}
        <div
          onClick={goToUserPage}
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-6 px-12 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-200"
        >
          User
        </div>

        {/* Team Leader Div */}
        <div
          onClick={goToTeamLeaderPage}
          className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-6 px-12 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition duration-200"
        >
          Team Leader
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
