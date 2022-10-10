import * as React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './single-project.css'
// FIXME declare this module type
//@ts-ignore
import Fade from 'react-reveal/Fade';

const Recettes = () => {

  return (
    <div className="single-project single-recettes">
      <Header />
      <div className="wrapper">
        <Fade left><h1>RECETTES EN POT</h1></Fade>
        <div className='single-project-infos'>
          <Fade left>
            <div className='single-project-content'>
              <nav>
                <ul>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                  <li>Swiperjs</li>
                </ul>
              </nav>
              <p>Recette en pot est un projet scolaire dont le but était de faire une refonte du site recettesenpot.com. </p>
              <p>Le but de ce projet était d’apporté une touche de fraîcheur au design mais aussi de faire une refonte de l’aspect UX du site. Pour conclure ce projet, il fallait intégrer quelques-unes des maquettes en HTML CSS et JavaScript.</p>
              <div className='single-project-btn-ctn'>
                <a href="https://jbrochu.dectim.ca/recette-en-pot/" target="_blank">Visiter le site</a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className='single-project-media'>
              <video loop muted autoPlay src="assets/recettes-en-pot.mp4"></video>
              <p>Projet réalisé en techniques d'intégration multimédia du Cégep Édouard-Montpetit, sans but commercial. Les marques commerciales et les droits d'auteur sont la propriété de leurs propriétaires respectifs.</p>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Recettes