import React from 'react'

const RightContainer = () => (
  <div className="col-sm me-right-cont">
    <div className="row">
      <div className="col-12 me-right-top">
        <label className="me-name">Hello, I'm Zal</label>
        <label className="me-quote">"Build what you love"</label>
      </div>
      <div className="col-12 me-right-bottom">
        <div className="row me-details">
          <img
            className="me-icon"
            src="https://img.icons8.com/color/48/000000/phone.png"
          />
          <div>+639350042268</div>
        </div>
        <div className="row me-details">
          <img
            className="me-icon"
            src="https://img.icons8.com/color/48/000000/email.png"
          />
          <div>zal.dev.30@gmail.com</div>
        </div>
        <div className="row me-details">
          <img
            className="me-icon"
            src="https://img.icons8.com/color/48/000000/motarboard.png"
          />
          <div>Bachelors of Science in Information Technology</div>
        </div>
      </div>
    </div>
  </div>
)

export default RightContainer
