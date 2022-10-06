import * as React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './single-project.css'

const Traveler = () => {

    return (
      
      <div className="single-project single-traveler">
        <Header />
        <div className="wrapper">
            <h1>TRAVELER</h1>
            <div className='single-project-infos'>
              <div className='single-project-content'>
                <nav>
                  <ul>
                    <li>ReactJs</li>
                    <li>TypeScript</li>
                    <li>Material UI</li>
                    <li>Vite</li>
                  </ul>
                </nav>
                <p>Traveler est un projet personnel mettant en avant un site fictionnel proposant un service de réservation de résidence dans différents pays.</p>
                <p>Le but de ce projet était de découvrir diverses technologies en un seul projet et principalement mettre en avant la composante de material UI Autocomplete. Mise à part material UI, j’ai expérimenté l’outil Vite pour démarrer mon projet. De plus, j’ai réalisé ce projet avec Reactjs ainsi que TypeScript.</p>
                <div className='single-project-btn-ctn'>
                  <a href="https://jbrochu-traveler.netlify.app/" target="_blank">Visiter le site</a>
                  <a href="https://github.com/JessicaBrochu/Traveler" target="_blank">Visiter Github</a>
                </div>
              </div>
              <div className='single-project-media'>
                <video loop muted autoPlay src="assets/traveler.mp4"></video>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Traveler