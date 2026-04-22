import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
  const toggleApp = (key) => {
    setWindowState((state) => ({ ...state, [key]: !state[key] }));
	};

  return (
    <footer className="dock">
      <div
        onClick={() => toggleApp("github")}
        className={`icon github ${windowState.github ? "is-active" : ""}`}
        aria-label="Open GitHub"
      >
        <img src="/doc-icon/github.svg" alt="" />
      </div>
      <div
        onClick={() => toggleApp("note")}
        className={`icon note ${windowState.note ? "is-active" : ""}`}
        aria-label="Open Notes"
      >
        <img src="/doc-icon/note.svg" alt="" />
      </div>
      <div
        onClick={() => toggleApp("pdf")}
        className={`icon pdf ${windowState.pdf ? "is-active" : ""}`}
        aria-label="Open Resume"
      >
        <img src="/doc-icon/pdf.svg" alt="" />
      </div>
      <div className="icon calender" onClick={() => window.open("https://calendar.google.com/calendar/r?tab=mc&pli=1", "_blank")}>
        <img src="/doc-icon/calender.svg" alt="" />
      </div>
      <div
        onClick={() => toggleApp("spotify")}
        className={`icon spotify ${windowState.spotify ? "is-active" : ""}`}
        aria-label="Open Spotify"
      >
        <img src="/doc-icon/spotify.svg" alt="" />
      </div>
      <div className="icon mail" onClick={() => window.open("mailto:vaibhav@examplegmail.com")}>
        <img src="/doc-icon/mail.svg" alt="" />
      </div>
      <div className="icon link"  onClick = {() => window.open("https://www.linkedin.com/in/vaibhav-bharade-749472294/", "_blank")}>
        <img src="/doc-icon/link.svg" alt="" />
      </div>
      <div
        onClick={() => toggleApp("cli")}
        className={`icon cli ${windowState.cli ? "is-active" : ""}`}
        aria-label="Open Terminal"
      >
        <img src="/doc-icon/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
