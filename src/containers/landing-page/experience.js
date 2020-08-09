import React, { forwardRef } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Timeline from '../../components/experience/timeline'

const Experience = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="container">
    <VerticalTimeline>
      <Timeline
        icon={require('../../shared/icons/java.png')}
        companyName="JMwebvision"
        jobTitle="Java Developer"
        description="This is the time where I got my On the Job Training (OJT). Here, I
                    discovered a lot of my potential when it comes to create an app or
                    system."
        year="Jul 2017 - Nov 2017"
      />
      <Timeline
        icon={require('../../shared/icons/android.png')}
        companyName="Posbang Corporation"
        jobTitle="Android Developer"
        description="My first ever local job. I was a Junior Developer and still learning
                    about Android."
        year="May 2018 – June 2018"
      />
      <Timeline
        icon={require('../../shared/icons/react.png')}
        companyName="Appiona"
        jobTitle="ReactJS Developer"
        description="My first ever online job. I was trained here on how to create web apps
                    with React."
        year="June 2018 – Oct 2018"
      />
      <Timeline
        icon={require('../../shared/icons/react.png')}
        companyName="Coffield Web"
        jobTitle="ReactJS/Frontend Developer"
        description="This job is so amazing. It trained me on how to work professionally
                    and how to handle with clients."
        year="Nov 2018 – Oct 2019"
      />
      <Timeline
        icon={require('../../shared/icons/react.png')}
        companyName="Medsoft Group"
        jobTitle="ReactJS Developer"
        description="This job enhances my skills in React. I've learned a lot in here including backend and some resources that I never been encounter before."
        year="Oct 2019 – Dec 2019"
      />
      <Timeline
        icon={require('../../shared/icons/react.png')}
        companyName="Data Corporation"
        jobTitle="React Native Developer"
        description="This online job is very interesting yet challenging as well. I learned
                    so much in this company and it really helps me grow more in IT
                    industry."
        year="Dec 2019 – June 2020"
      />
    </VerticalTimeline>
  </div>
))

export default Experience
