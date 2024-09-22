
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Simple logo text */}
        <div className="logo">Your Logo</div>

        {/* Custom buttons styled with CSS */}
        <div className="button-group">
          <button className="custom-button">Privacy Policy</button>
          <button className="custom-button">Terms of Service</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
