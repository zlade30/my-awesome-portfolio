import React from 'react'
import { Link } from 'react-router-dom'

const ProjectBox = ({ projectIcon, projectTitle, projectDescription }) => {
  return (
    <div className="col-lg my-projects-box">
      <div className="row">
        <img className="my-projects-icon" src={projectIcon} />
      </div>
      <div className="row">
        <label className="my-projects-name">{projectTitle}</label>
      </div>
      <div className="row">
        <label className="my-projects-description">{projectDescription}</label>
      </div>
      <div className="my-projects-btn">In Progress...</div>
    </div>
  )
}

export default ProjectBox
