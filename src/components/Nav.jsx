import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="/navbar-icon/apple.svg" alt="" />
            </div>

            <div className="nav-items">
                <p>Vaibhav Bharade</p>
            </div>
            <div className="nav-items">
                <p>File</p>
            </div>
            <div className="nav-items">
                <p>Window</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>

        <div className="right">
            <div className="nav-icon">
                <img src="/navbar-icon/wifi.svg" alt="" />
            </div>
            <DateTime/>
        </div>
      
    </nav>
  )
}

export default Nav
