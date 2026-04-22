import React, { useMemo, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

let topZIndex = 12;

const viewportValueToPixels = (value, max) => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string" && value.endsWith("vw")) {
    return (parseFloat(value) / 100) * window.innerWidth;
  }

  if (typeof value === "string" && value.endsWith("vh")) {
    return (parseFloat(value) / 100) * window.innerHeight;
  }

  const asNumber = Number(value);
  if (!Number.isNaN(asNumber)) {
    return asNumber;
  }

  return max;
};

const MacWindow = ({ children, width="40vw",height = "60vh", windowName, setWindowState, className = "" }) => {
  const initialLayout = useMemo(() => ({
    x: 80,
    y: 50,
    width: Math.max(320, viewportValueToPixels(width, 700)),
    height: Math.max(260, viewportValueToPixels(height, 500)),
  }), [height, width]);

  const [layout, setLayout] = useState(initialLayout);
  const [zIndex, setZIndex] = useState(() => ++topZIndex);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const preMaxLayoutRef = useRef(null);
  const preMinLayoutRef = useRef(null);

  const bringToFront = () => {
    setZIndex(++topZIndex);
  };

  const handleClose = () => {
    if (!setWindowState || !windowName) {
      return;
    }

    setWindowState((state) => ({ ...state, [windowName]: false }));
  };

  const handleMinimize = () => {
    bringToFront();

    if (isMinimized) {
      const previous = preMinLayoutRef.current;
      if (previous) {
        setLayout(previous);
      }
      setIsMinimized(false);
      return;
    }

    preMinLayoutRef.current = layout;
    setLayout((prev) => ({
      ...prev,
      height: 44,
      width: Math.max(320, Math.min(prev.width, 520)),
      y: Math.min(prev.y, window.innerHeight - 120),
    }));
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    bringToFront();

    if (isMinimized) {
      setIsMinimized(false);
    }

    if (isMaximized) {
      const previous = preMaxLayoutRef.current;
      if (previous) {
        setLayout(previous);
      }
      setIsMaximized(false);
      return;
    }

    preMaxLayoutRef.current = layout;
    setLayout({
      x: 12,
      y: 46,
      width: Math.max(320, window.innerWidth - 24),
      height: Math.max(260, window.innerHeight - 62),
    });
    setIsMaximized(true);
  };

  return (
    <Rnd
      size={{ width: layout.width, height: layout.height }}
      position={{ x: layout.x, y: layout.y }}
      onDragStart={bringToFront}
      onResizeStart={bringToFront}
      onDragStop={(_, data) => {
        setLayout((prev) => ({ ...prev, x: data.x, y: data.y }));
      }}
      onResizeStop={(_, __, ref, ___, position) => {
        setLayout({
          x: position.x,
          y: position.y,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
      minWidth={320}
      minHeight={44}
      bounds="parent"
      dragHandleClassName="window-nav"
      disableDragging={isMaximized}
      enableResizing={!isMaximized && !isMinimized}
      style={{ zIndex }}
    >
      <div className={`window ${isMinimized ? "is-minimized" : ""}`.trim()} onMouseDown={bringToFront}>
        <div className="window-nav nav">
            <div className="dots">
            <div onClick={handleClose} className="dot red" ></div>
                <div onClick={handleMinimize} className="dot yellow"></div>
                <div onClick={handleMaximize} className="dot green"></div>
            </div>
            <div className="title">
                <p>vaibhavbharade -zsh</p>
            </div>
            
        </div>
        <div className={`main-content ${className}`.trim()}>{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
