import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => setWindowState((state) => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="/doc-icon/github.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="/doc-icon/note.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, pdf: true }))}
        className="icon pdf"
      >
        <img src="/doc-icon/pdf.svg" alt="" />
      </div>
      <div className="icon calender" onClick={() => window.open("https://calendar.google.com/calendar/r?tab=mc&pli=1", "_blank")}>
        <img src="/doc-icon/calender.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, spotify: true }))}
        className="icon spotify"
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
        onClick={() => setWindowState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/doc-icon/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
