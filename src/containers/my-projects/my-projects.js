import React from 'react'
import ProjectBox from '../../components/my-projects/project-box'

const MyProjects = () => (
  <div className="container">
    <div className="row my-projects-cont">
      <ProjectBox
        projectIcon={require('../../shared/icons/chat.png')}
        projectTitle="Ping Me"
        projectDescription="An app that allows people to chat whenever and wherever they want."
      />
      <ProjectBox
        projectIcon={require('../../shared/icons/journal.png')}
        projectTitle="Write It"
        projectDescription="Let you write a journal because everyday is a special moment that you need to write on."
      />
      <ProjectBox
        projectIcon={require('../../shared/icons/collaborate.png')}
        projectTitle="Collab"
        projectDescription="A project management to improve collaboration with the team."
      />
    </div>
  </div>
)

export default MyProjects
