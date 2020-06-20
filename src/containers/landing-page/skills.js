import React, { forwardRef } from 'react'
import Backend from '../../components/skills/backend'
import Frontend from '../../components/skills/frontend'
import Language from '../../components/skills/language'
import Tools from '../../components/skills/tools'

const Skills = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="container skills">
    <div className="row">
      <Backend />
      <Frontend />
    </div>
    <div className="row">
      <Language />
      <Tools />
    </div>
  </div>
))

export default Skills
