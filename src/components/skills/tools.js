import React from 'react'

const Tools = () => (
  <div className="col-md skills-cont">
    <label className="skills-title">Tools</label>
    <div className="row">
      <img className="skills-icon" src={require('../../shared/icons/vs.png')} />
      <img
        className="skills-icon"
        src={require('../../shared/icons/vsc.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/studio.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/netbeans.png')}
      />
    </div>
    <div className="row">
      <img
        className="skills-icon"
        src={require('../../shared/icons/unity.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/github.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/bitbucket.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/postman.png')}
      />
    </div>
  </div>
)

export default Tools
