import React from 'react'
import EducationBox from '../../components/education/education-box'

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <EducationBox
          schoolYear="(2006-2010)"
          schoolName="Plantation Elementary School"
          schoolIcon="https://i.ibb.co/Bjv7rWz/download.png"
          wavePrimaryColor="#cbf7e5"
          waveSecondaryColor="#ade6cf"
        />
        <EducationBox
          schoolYear="(2011-2014)"
          schoolName="Libona National High School"
          schoolIcon="https://i.ibb.co/2v5jWJq/lnhs.png"
          wavePrimaryColor="#caf3fb"
          waveSecondaryColor="#aedfe8"
        />
        <EducationBox
          schoolYear="(2015-2019)"
          schoolName="Northern Bukidnon Community College"
          schoolIcon="https://i.ibb.co/Xt6YPxK/download-1.png"
          wavePrimaryColor="#fbe1e1"
          waveSecondaryColor="#ecc9c9"
        />
      </div>
    </div>
  )
}

export default Education
