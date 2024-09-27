import React, { useState } from "react";
import "./css/CardLayout.css"; // Import styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CardContainer from "./CardContainer";

const CardLayout = ({ boardName }) => {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="cardHead">
        <p className="head">{boardName}</p>
        <div className="down1">
        <FontAwesomeIcon icon={faAngleDown} style={{color:"black"}} />
        </div>
      </div>
      <div className="App" style={{width:"1000px"}}>
        <CardContainer />
      </div>
    </DndProvider>
  )
};


export default CardLayout;
