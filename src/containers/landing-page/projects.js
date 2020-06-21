import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Projects = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="project">
    <h1 className="project-title">My awesome works!</h1>
    <Link to="/my-projects" className="project-btn">
      Click Here!
    </Link>
  </div>
))

export default Projects
