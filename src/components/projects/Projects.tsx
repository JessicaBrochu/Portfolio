import * as React from 'react'
import './projects.css'
import Card from './../card/Card'
import { projects } from '../../../data/projects.json'

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="projects">
      <div className="wrapper">
        <h3>MES PROJETS</h3>
        <h4>TERMINÉS</h4>
        <div className="projects-finished">
          {projects?.map(
            ({ chipInfo, image, title, isPersonal, isFinished, links }) =>
              isFinished && (
                <Card
                  key={title}
                  title={title}
                  image={image}
                  isPersonal={isPersonal}
                  chipInfo={chipInfo}
                  links={links}
                />
              )
          )}
        </div>
        <h4>EN COURS</h4>
        <div className="projects-in-progress">
          {projects?.map(
            ({ chipInfo, image, title, isPersonal, isFinished, links }) =>
              !isFinished && (
                <Card
                  key={title}
                  title={title}
                  image={image}
                  isPersonal={isPersonal}
                  chipInfo={chipInfo}
                  links={links}
                />
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
