import React from 'react'

const Header = () => {
  return (
    <div className="nav-head">
      <nav className="navbar navbar-expand-lg navbar-light justify-content-end navbar-fixed-top">
        <img
          alt="menu"
          className="menu-icon"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          src={require('../../shared/icons/menu.png')}
        />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-end header navbar-collapse">
            <li className="nav-item">
              <a href="yeah" className="nav-btn" onClick={() => ''}>
                Me
              </a>
            </li>
            <li className="nav-item">
              <a href="ome" className="nav-btn" onClick={() => ''}>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a href="link" className="nav-btn" onClick={() => ''}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="disabled" className="nav-btn" onClick={() => ''}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="disabled" className="nav-btn" onClick={() => ''}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
