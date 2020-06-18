import React from 'react'
import RightContainer from '../../components/me/right-container'
import LeftContainer from '../../components/me/left-container'

const Me = () => {
  return (
    <div className="container">
      <div className="row">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  )
}

export default Me
