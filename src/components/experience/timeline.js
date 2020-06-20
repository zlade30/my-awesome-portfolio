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
    dateClassName="experience-date"
    iconClassName="experience-icon-cont"
    icon={<img className="experience-icon" src={icon} />}
  >
    <h3 className="company-name">{companyName}</h3>
    <div className="job">
      <img className="job-icon" style={{ marginRight: 10 }} src={icon} />
      <label className="job-title">{jobTitle}</label>
    </div>
    <label className="job-description">{description}</label>
  </VerticalTimelineElement>
)

export default Timeline
