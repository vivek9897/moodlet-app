import React, { useState } from "react";
import FSCMoodlet from "./components/FSCMoodlet";
import Moodlet from "./components/Moodlet";
import Dropdown from "./components/Dropdown";
import "./App.css"; // Ensure correct import

function App() {
  const [hoveredState, setHoveredState] = useState(null);
  const [hoveredLabel, setHoveredLabel] = useState("Read Only");

  const moodletOptions = ["Primary | Active", "Inactive", "Planning", "Released", "OK", "Stop", "Warning"];
    const handleHoverChange = (state, label) => {
    setHoveredState(state);
    setHoveredLabel(label);
  };
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Component Test</h1>
        <p>Implementing FSC Moodlets, Moodlets, and Dropdowns</p>
      </header>
      <main className="app-content">
        <section className="component-section">
          <h2>FSC Moodlet</h2>
          <div className="moodlet-group">
            <FSCMoodlet type="letter" />
            <FSCMoodlet type="word" />
          </div>
        </section>
        <section className="component-section">
         <h2>Moodlet Variants </h2>
          <div className="moodlet-group">
           <h1>Hover on interactive buttons</h1>
          </div> 
          <div className={`moodlet read-only ${hoveredState ? `hover-${hoveredState}` : ""}`}>
            <span className="moodlet-text">{hoveredLabel}</span>
          </div>
          <div className="moodlet-group">
            <h2>Primary | Active </h2>
            <Moodlet label="Primary | Active" state="active" onHoverChange={handleHoverChange} />
          </div>
          <div className="moodlet-group">
            <h2> InActive </h2>
            <Moodlet label="Inactive" state="inactive"  onHoverChange={handleHoverChange}/>
          </div>
          <div className="moodlet-group">
            <h2> Planning </h2>
            <Moodlet label="Planning" state="planning" onHoverChange={handleHoverChange} />
          </div>
          <div className="moodlet-group">
            <h2> Released</h2>
            <Moodlet label="Released" state="released"  onHoverChange={handleHoverChange}/>
          </div>
          <div className="moodlet-group">
            <h2> OK </h2>
            <Moodlet label="OK" state="ok" onHoverChange={handleHoverChange} />
          </div>
          <div className="moodlet-group">
            <h2> STOP </h2>
              <Moodlet label="STOP" state="stop" onHoverChange={handleHoverChange}/>
          </div>
          <div className="moodlet-group">
            <h2> Warning </h2>
            <Moodlet label="Warning" state="warning" onHoverChange={handleHoverChange}/>
          </div>
          <div className="moodlet-group">
            <h2> Placeholder </h2>
            <Moodlet label="Placeholder" state="placeholder"onHoverChange={handleHoverChange}/>
          </div>
          <div className="moodlet-group">
            <h2> Disabled </h2>
            <Moodlet label="Disabled" state="disabled" onHoverChange={handleHoverChange}/>
          </div>
        </section>

        {/* Dropdown */}
        <section className="component-section">
          <h2>Dropdown</h2>
          <Dropdown options={moodletOptions} defaultLabel="Select Moodlet" />
        </section>
      </main>
    </div>
  );
}

export default App;
