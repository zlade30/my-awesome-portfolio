import React from 'react'

const Language = () => (
  <div className="col-md skills-cont">
    <label className="skills-title">Language</label>
    <div className="row">
      <img
        className="skills-icon"
        src={require('../../shared/icons/php.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/java.png')}
      />
      <img className="skills-icon" src={require('../../shared/icons/js.png')} />
      <img className="skills-icon" src={require('../../shared/icons/c.png')} />
      <img
        className="skills-icon"
        src={require('../../shared/icons/c++.png')}
      />
    </div>
  </div>
)

export default Language
