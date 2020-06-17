import React from 'react'

const Header = () => (
  <ul className="nav justify-content-end header">
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
)

export default Header
