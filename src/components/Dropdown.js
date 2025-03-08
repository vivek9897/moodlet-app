import React, { useState } from "react";
import "../styles/dropdown.css";

const Dropdown = ({ options, defaultLabel = "Select an option" }) => {
  const [selected, setSelected] = useState(defaultLabel);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-button">{selected}</button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div 
              key={index} 
              className={`dropdown-item ${selected === option ? "selected" : ""}`}
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
