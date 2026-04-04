import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/GIthub'
import Note from './components/windows/Note'
import Pdf from './components/windows/Pdf'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'


const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    pdf: false,
    spotify: false,
    cli: false,
  })

  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.note && <Note windowName="note" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.pdf && <Pdf windowName="pdf" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} />}
    </main>
  )
}

export default App
