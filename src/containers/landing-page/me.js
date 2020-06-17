import React from 'react'
import RightContainer from '../../components/me/right-container'

const Me = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm me-left-cont">One of three columns</div>
        <RightContainer />
      </div>
    </div>
  )
}

export default Me
