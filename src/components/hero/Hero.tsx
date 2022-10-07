import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import Header from '../header/Header'
import './hero.css'
// FIXME declare this module type
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
import { Link } from 'react-router-dom'

function Stars(props: unknown) {
  const ref = useRef<THREE.Points>()

  // useEffect(() => {
  //   window.addEventListener('mousemove', (e) => {
  //     console.log('mousemove', e)
  //   })
  //   // return window.removeEventListener('mousemove')
  // }, [])

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )

  useFrame((state, delta) => {
    window.addEventListener('mousemove', (e) => {
      // let windowHeight = window.innerHeight
      // let windowWidth = window.innerWidth
      // let xValue = e.x
      // let yValue = e.y

      // let mousePosX = -1 + (xValue / windowWidth) * 2
      // let mousePosY = 1 - (yValue / windowHeight) * 2
      // console.log(Math.round(mousePosX * 10) / 10)
      // if (!ref.current) return
      // ref.current.rotation.x -= delta / (Math.round(mousePosX * 10) / 10) / 1000
      // ref.current.rotation.y -= delta / (Math.round(mousePosY * 10) / 10) / 1000
    })
    if (!ref.current) return
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 10
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
    <div className="hero" id='hero'>
      <Header />
      <div className='wrapper'>
        <div className="hero-text">
          <h1>Jessica Brochu</h1>
          <h2>Développeuse Front-End</h2>
          <div className="button-ctn">
            <Link to="/" state={{ scrollId: '#projects' }}>Voir mes projets</Link>
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