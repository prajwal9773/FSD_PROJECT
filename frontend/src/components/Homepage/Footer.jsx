
import React from 'react';
import './Footer.css'; 
import PlanityImage from './img/planity.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Simple logo text */}
        <div className="logo"><img src={PlanityImage} alt="Planity Logo" style={{ height: "30px", width: "30px", marginTop: "5px", marginRight: "8px" }} /></div>

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
