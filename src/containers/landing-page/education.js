import React, { forwardRef } from 'react'
import EducationBox from '../../components/education/education-box'

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props} className="container education">
      <div className="row">
        <EducationBox
          schoolYear="(2006-2010)"
          schoolName="Plantation Elementary School"
          schoolIcon={require('../../shared/icons/pes.png')}
          wavePrimaryColor="#cbf7e5"
          waveSecondaryColor="#ade6cf"
        />
        <EducationBox
          schoolYear="(2011-2014)"
          schoolName="Libona National High School"
          schoolIcon={require('../../shared/icons/lnhs.png')}
          wavePrimaryColor="#caf3fb"
          waveSecondaryColor="#aedfe8"
        />
        <EducationBox
          schoolYear="(2015-2019)"
          schoolName="Northern Bukidnon Community College"
          schoolIcon={require('../../shared/icons/nbcc.png')}
          wavePrimaryColor="#fbe1e1"
          waveSecondaryColor="#ecc9c9"
        />
      </div>
    </div>
  )
})

export default Education
