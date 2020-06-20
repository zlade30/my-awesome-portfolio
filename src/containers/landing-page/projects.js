import React, { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="project">
    <h1 className="project-title">My awesome works!</h1>
    <div className="project-btn">
      <label>Click Here!</label>
    </div>
  </div>
))

export default Projects
