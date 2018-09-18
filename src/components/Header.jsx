import React from "react";

const Header = ({ onGameStart, hide, score }) => {
  const rootClasses = ["game-card"];
  const contentClasses = ["game-card-contents"];
  if (hide) {
    contentClasses.push("hide");
    rootClasses.push("hide");
  }
  return (
    <div className={rootClasses.join(" ")}>
      <h1 className={contentClasses.join(" ")}>Ready</h1>
      <button
        className={contentClasses.join(" ")}
        onClick={onGameStart}
        autoFocus
      >
        Press Enter To Start
      </button>
    </div>
  );
};

export default Header;
