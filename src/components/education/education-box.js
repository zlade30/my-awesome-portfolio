import React from 'react'

const Wave1 = ({ waveColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{ borderRadius: 10 }}
  >
    <path
      fill={waveColor}
      fillOpacity="1"
      d="M0,192L18.5,202.7C36.9,213,74,235,111,218.7C147.7,203,185,149,222,128C258.5,107,295,117,332,117.3C369.2,117,406,107,443,112C480,117,517,139,554,160C590.8,181,628,203,665,229.3C701.5,256,738,288,775,282.7C812.3,277,849,235,886,192C923.1,149,960,107,997,122.7C1033.8,139,1071,213,1108,224C1144.6,235,1182,181,1218,181.3C1255.4,181,1292,235,1329,250.7C1366.2,267,1403,245,1422,234.7L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
    ></path>
  </svg>
)

const Wave2 = ({ waveColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{ borderRadius: 10 }}
  >
    <path
      fill={waveColor}
      fillOpacity="1"
      d="M0,96L18.5,101.3C36.9,107,74,117,111,106.7C147.7,96,185,64,222,53.3C258.5,43,295,53,332,74.7C369.2,96,406,128,443,165.3C480,203,517,245,554,266.7C590.8,288,628,288,665,266.7C701.5,245,738,203,775,192C812.3,181,849,203,886,186.7C923.1,171,960,117,997,133.3C1033.8,149,1071,235,1108,266.7C1144.6,299,1182,277,1218,224C1255.4,171,1292,85,1329,53.3C1366.2,21,1403,43,1422,53.3L1440,64L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
    ></path>
  </svg>
)

const EducationBox = ({
  schoolYear,
  schoolName,
  schoolIcon,
  wavePrimaryColor,
  waveSecondaryColor,
}) => {
  return (
    <div className="col-lg education-container">
      <div className="education-box">
        <div className="education-box-container">
          <div className="row">
            <img className="school-icon" src={schoolIcon} />
          </div>
          <div className="row">
            <img
              className="school-cap"
              src="https://img.icons8.com/color/48/000000/motarboard.png"
            />
          </div>
          <div className="row">
            <label className="school-name">{schoolName}</label>
          </div>
          <div className="row">
            <label className="school-year">{schoolYear}</label>
          </div>
        </div>
        <div className="education-box-wave">
          <Wave1 waveColor={waveSecondaryColor} />
        </div>
        <div className="education-box-wave">
          <Wave2 waveColor={wavePrimaryColor} />
        </div>
      </div>
    </div>
  )
}

export default EducationBox
