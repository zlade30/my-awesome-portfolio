import React from 'react'

const Backend = () => (
  <div className="col-md skills-cont">
    <label className="skills-title">Backend</label>
    <div className="row">
      <img
        className="skills-icon"
        src={require('../../shared/icons/firebase.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/firestore.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/mongodb.png')}
      />
      <img
        className="skills-icon"
        src={require('../../shared/icons/mysql.png')}
      />
    </div>
  </div>
)

export default Backend
