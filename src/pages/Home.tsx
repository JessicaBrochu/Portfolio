import * as React from 'react'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import './home.css'

const App = () => {
  return (
    <div className='home'>
      <Hero />
      <Projects />
    </div>
  )
}

export default App
