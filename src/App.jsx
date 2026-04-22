import React, { Suspense, lazy, useEffect, useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'

const Github = lazy(() => import('./components/windows/GIthub'))
const Note = lazy(() => import('./components/windows/Note'))
const Pdf = lazy(() => import('./components/windows/Pdf'))
const Spotify = lazy(() => import('./components/windows/Spotify'))
const Cli = lazy(() => import('./components/windows/Cli'))

const DEFAULT_WINDOWS = {
  github: false,
  note: false,
  pdf: false,
  spotify: false,
  cli: false,
}

const getInitialWindowState = () => {
  try {
    const saved = window.localStorage.getItem('os-window-state')
    if (!saved) {
      return DEFAULT_WINDOWS
    }

    const parsed = JSON.parse(saved)
    return { ...DEFAULT_WINDOWS, ...parsed }
  } catch {
    return DEFAULT_WINDOWS
  }
}


const App = () => {
  const [windowState, setWindowState] = useState(getInitialWindowState)

  useEffect(() => {
    window.localStorage.setItem('os-window-state', JSON.stringify(windowState))
  }, [windowState])

  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState} />
      <Suspense fallback={<div className='window-loading'>Opening app...</div>}>
        {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.note && <Note windowName="note" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.pdf && <Pdf windowName="pdf" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.cli && <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} />}
      </Suspense>
    </main>
  )
}

export default App
