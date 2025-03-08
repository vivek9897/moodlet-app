import { useState } from "react";
import "../styles/fscMoodlet.css";

const FSCMoodlet = ({ type = "letter" }) => {
  const [state, setState] = useState("required");

  const handleLeftClick = () => {
    if (state === "required") setState("current");
    else if (state === "current") setState("completed");
    else if (state === "completed") setState("current");
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setState("not-required");
  };

  const getLabel = () => {
    if (type === "letter") {
      return state === "required" ? "F" : state === "current" ? "S" : state === "completed" ? "C" : "X";
    } else {
      return state === "required" ? "Fuelling" : state === "current" ? "Servicing" : state === "completed" ? "Cleaning" : "Not Required";
    }
  };

  return (
    <div
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      className={`moodlet ${state}`}
    >
      {getLabel()}
    </div>
  );
};

export default FSCMoodlet;
