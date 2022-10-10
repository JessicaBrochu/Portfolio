import * as React from 'react'
import { memo, useRef } from 'react'
import { Link, } from 'react-router-dom'
import { useScroll } from '../../utils/ScrollHook'
import { Path } from '../../utils/utils'
import './projects.css'
// FIXME declare this module type
//@ts-ignore
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScroll(ref, Path.PROJECTS)

  return (
    <div className="projects" id='projects' ref={ref}>
      <div className="projects-ctn">

        <Link to="traveler" className="project">
          <div className="project-hover">
            <Fade left><h4>TRAVELER</h4></Fade>
            <nav>
              <Fade left>
                <ul className="project-technologies">
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                </ul>
              </Fade>
            </nav>
          </div>
          <img src="assets/traveler.jpg" alt="Image du projet Traveler" />
        </Link>

        <Link to="recettes-en-pot" className="project">
          <div className="project-hover">
            <Fade right><h4>RECETTES EN POT</h4></Fade>
            <nav>
              <Fade right>
                <ul className="project-technologies">
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                </ul>
              </Fade>
            </nav>
          </div>
          <img src="assets/recettes-en-pot.jpg" alt="Image du projet Recettes en pot" />
        </Link>

        <Link to="furnitura" className="project">
          <div className="project-hover">
            <Fade left><h4>FURNITURA</h4></Fade>
            <nav>
              <Fade left>
                <ul className="project-technologies">
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                </ul>
              </Fade>
            </nav>
          </div>
          <img src="assets/furnitura.jpg" alt="Image du projet Furnitura" />
        </Link>

        <Link to="timdesign" className="project">
          <div className="project-hover">
            <Fade right><h4>TIMDESIGN</h4></Fade>
            <nav>
              <Fade right>
                <ul className="project-technologies">
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                </ul>
              </Fade>
            </nav>
          </div>
          <img src="assets/timdesign.jpg" alt="Image du projet Timdesign" />
        </Link>

      </div>
    </div>
  )
}

export default memo(Projects)
