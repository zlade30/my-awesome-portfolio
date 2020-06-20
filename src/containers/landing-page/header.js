import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Header = ({ onClickItem }) => {
  const clickItem = () => {
    return onClickItem('wrwer')
  }

  return (
    <Router>
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
                <Link
                  to="/"
                  className="nav-btn"
                  onClick={() => {
                    return onClickItem('me')
                  }}
                >
                  Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/education"
                  className="nav-btn"
                  onClick={() => {
                    return onClickItem('education')
                  }}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/experience"
                  className="nav-btn"
                  onClick={() => {
                    return onClickItem('experience')
                  }}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/skills"
                  className="nav-btn"
                  onClick={() => {
                    return onClickItem('skills')
                  }}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-btn"
                  onClick={() => {
                    return onClickItem('projects')
                  }}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/me" />
          <Route path="/education" />
          <Route path="/experience" />
          <Route path="/skills" />
          <Route path="/projects" />
        </Switch>
      </div>
    </Router>
  )
}

export default Header
