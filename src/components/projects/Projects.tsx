import * as React from 'react'
import './projects.css'

const Projects = () => {

  return (
    <div className="projects traveler">
      <div className="projects-ctn">

        <a href="#" className="project">
          <div className="project-hover">
              <h4>TRAVELER</h4>
              <nav>
                <ul className="project-technologies">
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                </ul>
              </nav>
            </div>
            <img src="./public/assets/traveler.jpg" alt="Image du projet Traveler" />
        </a>

        <a href="#" className="project">
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
          <img src="./public/assets/recettes-en-pot.jpg" alt="Image du projet Recettes en pot" />
        </a>

        <a href="#" className="project">
          <div className="project-hover">
            <h4>FURNITURA</h4>
            <nav>
              <ul className="project-technologies">
                <li>Vue.js</li>
                <li>JavaScript</li>
              </ul>
            </nav>
          </div>
          <img src="./public/assets/furnitura.jpg" alt="Image du projet Furnitura" />
        </a>

        <a href="#" className="project">
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
            <img src="./public/assets/timdesign.jpg" alt="Image du projet Timdesign" />
        </a>

      </div>
    </div>
  )
}

export default Projects
