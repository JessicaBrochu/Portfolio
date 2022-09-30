import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import './hero.css'
// FIXME declare this module type
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props: unknown) {
  const ref = useRef<THREE.Points>()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        // ref error must be ignored because it doesn't recognize the typing
        // FIXME adjust the type on useRef to remove the error on this ref
        //@ts-ignore
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        //@ts-ignore
        {...props}
      >
        <PointMaterial
          // FIXME find a way to remove this typing error
          //@ts-ignore
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="logo-ctn">
        <a href="#" className="logo">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8629 0.990234V48.9787H19.3426L19.2 48.8773L0 35.4378V29.7477L19.2 43.19V6.72418L0 20.1664V14.4791L19.2 1.03685L19.2658 0.990234H23.8629Z" fill="white"/>
            <path d="M49.8984 20.15L49.9203 20.1363V14.4791L49.8957 14.4627L30.7203 1.03685L30.6545 0.990234H25.7832V48.9787H30.5777L30.7203 48.8773L49.8573 35.4816L49.9203 35.4378V29.8354L49.8573 29.7916L42.9919 24.9845L43.0714 24.9296L49.8984 20.15ZM30.7203 22.0832L34.3958 24.6554L34.8648 24.9845L30.7203 27.8885V22.0832ZM45.3233 32.3062L45.7923 32.6352L30.7203 43.19V33.5758L38.927 27.8309L45.3233 32.3062ZM39.0065 22.086L38.927 22.1408L38.4579 21.8118L30.7203 16.3932V6.72418L45.8335 17.3063L39.0065 22.086Z" fill="white"/>
            <path d="M49.9208 20.1357V20.1665L49.8984 20.1497L49.9208 20.1357Z" fill="white"/>
            <path d="M49.9205 29.748V29.8358L49.8574 29.7919L49.9205 29.748Z" fill="white"/>
          </svg>
        </a>
      </div>
      <nav className="desktop-nav">
        <ul>
          <li><a href="#">ACCUEIL</a></li>
          <li><a href="#">PROJETS</a></li>
          <li><a href="#">À PROPOS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div className='wrapper'>
        <div className="hero-text">
          <h1>Jessica Brochu</h1>
          <h2>Développeuse Front-End</h2>
          <div className="button-ctn">
            <a href="#">Voir mes projets</a>
          </div>
        </div>
      </div>
      <Canvas
        style={{ height: '100vh', background: '#07070e' }}
        camera={{ position: [0, 0, 1] }}
      >
        <Stars />
      </Canvas>
    </div>
  )
}

export default Hero
