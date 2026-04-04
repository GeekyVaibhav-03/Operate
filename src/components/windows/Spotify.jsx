import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} className="spotify-window">
        <iframe data-testid="embed-iframe"  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </MacWindow>
  )
}

export default Spotify
