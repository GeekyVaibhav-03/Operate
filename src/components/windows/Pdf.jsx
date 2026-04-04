import React from 'react'
import MacWindow from './MacWindow'

const Pdf = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} className="pdf-resume">
        <iframe title="resume" src="/resume.pdf" width="100%" height="100%"></iframe>
    </MacWindow>
  )
}

export default Pdf
