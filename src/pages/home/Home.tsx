import * as React from 'react'
import Hero from '../../components/hero/Hero'
import Projects from '../../components/projects/Projects'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './home.css'
import { useEffect, useState } from 'react'
import { Path } from '../../utils/utils'

const App = () => {
  const path = Object.values(Path)
  const [sectionState, setSectionState] = useState(0)

  useEffect(() => {
    if (window.screen.width > 1023) {
      window.addEventListener('wheel', scrollToSection);
    }
  }, [sectionState, setSectionState])

  const scrollToSection = (wheelEvent: WheelEvent) => {
    const { deltaY } = wheelEvent

    if (deltaY < 0) {
      setSectionState(sectionState > 0 ? sectionState - 1 : sectionState)
    } else if (deltaY > 0) {
      setSectionState(sectionState < 3 ? sectionState + 1 : sectionState)
    }
  }

  return (
    <div className='home' id='home'>
      <div className='section'>
        <Hero isSectionAvtive={path[sectionState] === '#hero'} />
      </div>
      <div className='section'>
        <Projects isSectionAvtive={path[sectionState] === '#projects'} />
      </div>
      <div className='section'>
        <About isSectionAvtive={path[sectionState] === '#about'} />
      </div>
      <div className='section'>
        <Contact isSectionAvtive={path[sectionState] === '#contact'} />
        <Footer />
      </div>
      <Link to="/" state={{ scrollId: '#hero' }} className="arrow">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5688 13.6936C29.9831 13.1078 29.0333 13.1078 28.4475 13.6936L18.9016 23.2396C18.3158 23.8254 18.3158 24.7751 18.9016 25.3609C19.4874 25.9467 20.4371 25.9467 21.0229 25.3609L29.5082 16.8756L37.9935 25.3609C38.5792 25.9467 39.529 25.9467 40.1148 25.3609C40.7006 24.7751 40.7006 23.8254 40.1148 23.2396L30.5688 13.6936ZM31.0082 45.2461L31.0082 14.7543L28.0082 14.7543L28.0082 45.2461L31.0082 45.2461Z" fill="#D35F74" />
          <circle cx="30" cy="30" r="28.5" stroke="#D35F74" stroke-width="3" />
        </svg>
      </Link>
    </div>
  )
}

export default App
