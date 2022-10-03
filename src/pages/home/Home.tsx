import * as React from 'react'
import Hero from '../../components/hero/Hero'
import Projects from '../../components/projects/Projects'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import './home.css'

const App = () => {
  
  return (
    <div className='home'>
      <div className='section'>
        <Hero />
      </div>
      <div className='section'>
        <Projects />
      </div>
      <div className='section'>
        <About />
      </div>
      <div className='section'>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
