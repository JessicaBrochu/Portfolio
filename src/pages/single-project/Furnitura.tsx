import * as React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './single-project.css'

const Furnitura = () => {

    return (
<div className="single-project single-furnitura">
        <Header />
        <div className="wrapper">
            <h1>FURNITURA</h1>
            <div className='single-project-infos'>
              <div className='single-project-content'>
                <nav>
                  <ul>
                    <li>Vue CLI</li>
                    <li>Vue.js</li>
                    <li>PrimeVUE</li>
                    <li>JavaScript</li>
                  </ul>
                </nav>
                <p>Furnitura est un projet personnel mettant en avant un site fictionnel proposant un service de mise en ligne de meubles d’occasions.</p>
                <p>Le but de ce projet était de découvrir Vue.js. Pour démarrer mon projet, j’ai expérimenté Vue CLI. Ce projet a été réaliser à l’aide de Vue.js, PrimeVUE et de JavaScript.</p>
                <div className='single-project-btn-ctn'>
                  <a href="https://jbrochu-furnitura.netlify.app/" target="_blank">Visiter le site</a>
                  <a href="https://github.com/JessicaBrochu/Furnitura" target="_blank">Visiter Github</a>
                </div>
              </div>
              <div className='single-project-media'>
                <img src="assets/furnitura.jpg" alt="Image du projet Traveler" />
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Furnitura