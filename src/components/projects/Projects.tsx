import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BASE_PATH, Path } from '../../utils/utils'
import './projects.css'

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const {pathname, state} = useLocation()
  const {scrollId} = state as { scrollId?: string } || ''
  
  useEffect(() => {
    if (pathname === BASE_PATH && scrollId === Path.PROJECTS) {
        console.log(state)
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
  }, [state, pathname])

  return (
    <div className="projects" id='projects' ref={ref}>
      <div className="projects-ctn">

        <Link to="traveler" className="project">
          <div className="project-hover">
              <h4>TRAVELER</h4>
              <nav>
                <ul className="project-technologies">
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                </ul>
              </nav>
            </div>
            <img src="assets/traveler.jpg" alt="Image du projet Traveler" />
        </Link>

        <Link to="recettes-en-pot" className="project">
          <div className="project-hover">
            <h4>RECETTES EN POT</h4>
            <nav>
              <ul className="project-technologies">
                <li>HTML</li>
                <li>SCSS</li>
                <li>Javascript</li>
              </ul>
            </nav>
          </div>
          <img src="assets/recettes-en-pot.jpg" alt="Image du projet Recettes en pot" />
        </Link>

        <Link to="furnitura" className="project">
          <div className="project-hover">
            <h4>FURNITURA</h4>
            <nav>
              <ul className="project-technologies">
                <li>Vue.js</li>
                <li>JavaScript</li>
              </ul>
            </nav>
          </div>
          <img src="assets/furnitura.jpg" alt="Image du projet Furnitura" />
        </Link>

        <Link to="timdesign" className="project">
          <div className="project-hover">
            <h4>TIMDESIGN</h4>
            <nav>
                <ul className="project-technologies">
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                </ul>
              </nav>
            </div>
            <img src="assets/timdesign.jpg" alt="Image du projet Timdesign" />
        </Link>

      </div>
    </div>
  )
}

export default Projects
