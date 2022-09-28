import * as React from 'react'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
import './home.css'

const App = () => {
  return (
    <div className='home'>
      <Hero />
      <Projects />
      <About />
    </div>
  )
}

export default App
