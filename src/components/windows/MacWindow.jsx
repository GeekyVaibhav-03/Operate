import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width="40vw",height = "60vh", windowName, windowState, setWindowState }) => {
  const handleClose = () => {
    if (!setWindowState || !windowName) {
      return;
    }

    setWindowState((state) => ({ ...state, [windowName]: false }));
  };

  return (
    <Rnd default={{
      height:height,
      width: width,
      x: 80,
      y: 50,
    }}>
      <div className="window">
        <div className="nav">
            <div className="dots">
            <div onClick={handleClose} className="dot red" ></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">
                <p>vaibhavbharade -zsh</p>
            </div>
            
        </div>
        <div className={`main-content`}>{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
