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
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
