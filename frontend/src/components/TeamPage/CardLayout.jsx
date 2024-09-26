import React, { useState } from "react";
import "./css/CardLayout.css"; // Import styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CardLayout = ({ boardName }) => {
  return (
    <div>
      <div className="cardHead">
        <p className="head">{boardName}</p>
        <div className="down1">
        <FontAwesomeIcon icon={faAngleDown} style={{color:"black"}} />
        </div>
      </div>
    </div>
  )
};


export default CardLayout;
