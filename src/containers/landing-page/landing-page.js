import React, { useRef, createRef } from 'react'
import Header from './header'
import Me from './me'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import Projects from './projects'

const LandingPage = () => {
  const scrollToRef = (ref, item) => {
    switch (item) {
      case 'me':
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
        break
      case 'education':
        window.scrollTo({
          top: ref.current.offsetTop - 100,
          behavior: 'smooth',
        })
        break
      case 'experience':
        window.scrollTo({
          top: ref.current.offsetTop - 100,
          behavior: 'smooth',
        })
        break
      case 'skills':
        window.scrollTo({
          top: ref.current.offsetTop - 50,
          behavior: 'smooth',
        })
        break
      case 'projects':
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
        break
    }
  }

  const meRef = createRef()
  const educRef = createRef()
  const expRef = createRef()
  const skillsRef = createRef()
  const projRef = createRef()

  const executeScroll = (item) => {
    switch (item) {
      case 'me':
        scrollToRef(meRef, item)
        break
      case 'education':
        scrollToRef(educRef, item)
        break
      case 'experience':
        scrollToRef(expRef, item)
        break
      case 'skills':
        scrollToRef(skillsRef, item)
        break
      case 'projects':
        scrollToRef(projRef, item)
        break
    }
  }

  return (
    <div>
      <Header onClickItem={executeScroll} />
      <Me ref={meRef} />
      <Education ref={educRef} />
      <Experience ref={expRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projRef} />
    </div>
  )
}

export default LandingPage
