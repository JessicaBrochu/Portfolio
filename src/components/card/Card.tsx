import * as React from 'react'
import './card.css'

const Card = ({
  chipInfo,
  title,
  image,
  isPersonal,
  links,
}: {
  chipInfo?: string[]
  title: string
  image: string
  isPersonal: boolean
  links: {
    github?: string
    website?: string
  }
}) => {
  return (
    <div className="card">
      <div className="card-project-image">
        <img className="card-image" src={image} alt={title} title={title} />

        <div className="card-hover">
          {(links.github || links.website) && (
            <>
              {links.github && <a href={links.github}>Visitez Github</a>}
              {links.website && <a href={links.website}>Visitez le site</a>}
            </>
          )}
          {!links.github && !links.website && (
            <>
              <p>
                Ce projet est présentement en phase de conceptualisation sur
                Figma.
              </p>
              <p>Revenez plus tard!</p>
            </>
          )}
        </div>
      </div>
      <div className="card-info">
        {isPersonal && <p>Projet personnel</p>}
        {!isPersonal && <p>Projet scolaire</p>}
        <div className="card-chips">
          {chipInfo &&
            chipInfo.map((chip) => (
              <span className="card-chip" key={chip}>
                {chip}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Card
