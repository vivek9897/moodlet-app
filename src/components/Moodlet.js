import React, { useState } from "react";
import "../styles/moodlet.css";

const Moodlet = ({ label, state = "active", onHoverChange }) => {
  return (
    <div className="moodlet-container">
      <div className={`moodlet ${state}`}>
        <span className="moodlet-text">{label}</span>
      </div>
      <div
        className={`moodlet ${state} interactive`}
        onMouseEnter={() => onHoverChange(state,label)}
        onMouseLeave={() => onHoverChange(null ,"Read Only")}
      >
        <span className="moodlet-text">Interactive</span>
      </div>
    </div>
  );
};

export default Moodlet;
