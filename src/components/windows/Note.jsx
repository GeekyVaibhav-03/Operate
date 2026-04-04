import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import "./note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = ({ windowName, windowState, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} className="notewindow">
        {markdown ? (
          <SyntaxHighlighter language="typescript" className="note-raw" style={atelierForestDark} customStyle={{ padding: "20px" }}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </MacWindow>
    </div>
  );
};

export default Note;
