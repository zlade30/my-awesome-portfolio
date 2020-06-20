import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const Timeline = ({ icon, companyName, jobTitle, description, year }) => (
  <VerticalTimelineElement
    contentStyle={{
      backgroundColor: 'white',
      boxShadow: '0px 0px 41px -23px rgba(0, 0, 0, 0.75)',
    }}
    contentArrowStyle={{ borderRight: '7px solid #e6e6e6' }}
    date={year}
    dateClassName="experience-text-small"
    iconClassName="experience-icon"
    icon={<img src="https://img.icons8.com/ultraviolet/40/000000/work.png" />}
  >
    <h3 className="experience-text-large">{companyName}</h3>
    <div className="experience-job-title">
      <img style={{ marginRight: 10 }} src={icon} />
      <label>{jobTitle}</label>
    </div>
    <p>{description}</p>
  </VerticalTimelineElement>
)

export default Timeline
