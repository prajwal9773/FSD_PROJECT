import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = async () => {
    try {
      const response = await axios.put('/api/users/edit-name', { name });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error updating name');
    }
  };

  const handlePasswordChange = async () => {
    try {
      const response = await axios.put('/api/users/change-password', { oldPassword, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error updating password');
    }
  };

  const handleLogout = () => {
    axios.post('/api/users/logout')
      .then(() => {
        window.location.href = '/login'; // Redirect to login page
      })
      .catch((error) => {
        setMessage('Error logging out');
      });
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-option">
        <h4>Edit Name</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
        />
        <button onClick={handleNameChange}>Save</button>
      </div>

      <div className="settings-option">
        <h4>Change Password</h4>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Old password"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />
        <button onClick={handlePasswordChange}>Change Password</button>
      </div>

      <div className="settings-option">
        <h4>Logout</h4>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Settings;
