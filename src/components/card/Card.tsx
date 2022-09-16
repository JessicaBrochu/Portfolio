import * as React from 'react'
import './card.css'

const Card = ({
  title,
  image,
}: {
  title: string
  image: string
}) => {
  return (
    <div className="card">
      <div className="card-project-image">
        <img className="card-image" src={image} alt={title} title={title} />
      </div>
    </div>
  )
}

export default Card
