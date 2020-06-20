import React, { forwardRef } from 'react'
import RightContainer from '../../components/me/right-container'
import LeftContainer from '../../components/me/left-container'

const Me = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="container">
    <div className="row">
      <LeftContainer />
      <RightContainer />
    </div>
  </div>
))

export default Me
