import * as React from 'react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useScroll } from '../../utils/ScrollHook'
import { BASE_PATH, Path } from '../../utils/utils'
import './about.css'

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScroll(ref, Path.ABOUT)

    return (
      <div className="about" id='about' ref={ref}>
        <div className="wrapper">
            <div className='about-content'>
                <h3>À PROPOS</h3>
                <p>Je suis une <span>développeuse front-end</span> en dernière année d’études constamment à la recherche de nouveaux défis qui me permettront d’étoffer mes connaissances et ainsi progresser dans le domaine du web.</p>
                <p>Ayant déjà réalisé un stage en tant que développeuse front-end, je suis à la recherche d’une expérience similaire dans <span>une entreprise qui recherche une développeuse motivée.</span></p>
                <p>On me décrit comme étant une personne <span>autonome</span>, <span>motivée</span> et <span>organisée</span>.</p>
            </div>
            <div className='about-skills'>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>HTML</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>JavaScript</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>CraftCMS</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>Vue.js</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>CSS/SASS</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>ReactJs</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>WordPress</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>PHP</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>Twig</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>CreateJs</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>TypeScript</p>
              </div>
              <div className='skill'>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z" fill="#07070E"/>
                </svg>
                <p>C#</p>
              </div>
            </div>
        
        <div className="about-logo">
          <svg width="360" height="360" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8629 0.990234V48.9787H19.3426L19.2 48.8773L0 35.4378V29.7477L19.2 43.19V6.72418L0 20.1664V14.4791L19.2 1.03685L19.2658 0.990234H23.8629Z" fill="white"/>
              <path d="M49.8984 20.15L49.9203 20.1363V14.4791L49.8957 14.4627L30.7203 1.03685L30.6545 0.990234H25.7832V48.9787H30.5777L30.7203 48.8773L49.8573 35.4816L49.9203 35.4378V29.8354L49.8573 29.7916L42.9919 24.9845L43.0714 24.9296L49.8984 20.15ZM30.7203 22.0832L34.3958 24.6554L34.8648 24.9845L30.7203 27.8885V22.0832ZM45.3233 32.3062L45.7923 32.6352L30.7203 43.19V33.5758L38.927 27.8309L45.3233 32.3062ZM39.0065 22.086L38.927 22.1408L38.4579 21.8118L30.7203 16.3932V6.72418L45.8335 17.3063L39.0065 22.086Z" fill="white"/>
              <path d="M49.9208 20.1357V20.1665L49.8984 20.1497L49.9208 20.1357Z" fill="white"/>
              <path d="M49.9205 29.748V29.8358L49.8574 29.7919L49.9205 29.748Z" fill="white"/>
          </svg>
        </div>
        </div>
      </div>
    )
  }
  
  export default About