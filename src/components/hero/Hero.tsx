import { useState, useRef, useEffect, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import Header from '../header/Header'
import './hero.css'
// FIXME declare this module type
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
import { Link } from 'react-router-dom'
import { Path } from '../../utils/utils'
import { useScroll } from '../../utils/ScrollHook'
// FIXME declare this module type
//@ts-ignore
import Fade from 'react-reveal/Fade';

enum AxisState {
  STOPPED = 0,
  NEGATIVE = -1,
  POSITIVE = 1
}

type Stars = {
  xMove: AxisState
  yMove: AxisState
}

function Stars({ xMove, yMove }: Stars) {
  const ref = useRef<THREE.Points>()

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )

  useFrame((state, delta) => {
    if (!ref.current) return

    // Defines the movement on the x axis based on mouse movement
    switch (xMove) {
      case AxisState.POSITIVE:
        ref.current.rotation.x += delta / 3
        break;
      case AxisState.NEGATIVE:
        ref.current.rotation.x -= delta / 3
        break;
      default:
        ref.current.rotation.x -= delta / 10
        break;
    }

    // Defines the movement on the y axis based on mouse movement
    switch (yMove) {
      case AxisState.POSITIVE:
        ref.current.rotation.y += delta / 3
        break;
      case AxisState.NEGATIVE:
        ref.current.rotation.y -= delta / 3
        break;
      default:
        ref.current.rotation.y -= delta / 10
        break;
    }
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

const Hero = ({ isSectionAvtive }: { isSectionAvtive: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [xMove, setXMove] = useState<AxisState>(AxisState.STOPPED)
  const [yMove, setYMove] = useState<AxisState>(AxisState.STOPPED)
  useScroll(ref, Path.HERO)

  useEffect(() => {
    if (isSectionAvtive) {
      ref.current?.scrollIntoView(true)
    }
  }, [isSectionAvtive])

  // This is called when the mouse movement is completely stopped
  const onMouseStop = () => {
    setXMove(AxisState.STOPPED)
    setYMove(AxisState.STOPPED)
  }

  let mouseState: number
  // This detects if the mouse moves in a specific axis in its negative, positive or even if it stops
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { movementX, movementY } = e.nativeEvent

    switch (true) {
      case movementX > 0:
        setXMove(AxisState.POSITIVE)
        break;
      case movementX < 0:
        setXMove(AxisState.NEGATIVE)
        break;
      case movementX === 0:
        setXMove(AxisState.STOPPED)
        break;
      case movementY > 0:
        setYMove(AxisState.POSITIVE)
        break;
      case movementY < 0:
        setYMove(AxisState.NEGATIVE)
        break;
      case movementY === 0:
        setYMove(AxisState.STOPPED)
        break;
      default:
        break;
    }

    // This clears the timeout until the last mouse movement
    clearTimeout(mouseState)
    mouseState = setTimeout(onMouseStop, 500)
  }

  return (

    <div onMouseMove={onMouseMove} className="hero" id='hero' ref={ref}>
      <Header />
      <div className='wrapper'>

        <div className="hero-text">
          <Fade bottom><h1>Jessica Brochu</h1></Fade>
          <Fade bottom><h2>Développeuse Front-End</h2></Fade>
          <Fade bottom>
            <div className="button-ctn">
              <Link to="/" state={{ scrollId: '#projects' }}>Voir mes projets</Link>
            </div>
          </Fade>
        </div>
      </div>
      <Canvas
        style={{ height: '100vh', background: '#07070e' }}
        camera={{ position: [0, 0, 1] }}
      >
        <Stars xMove={xMove} yMove={yMove} />
      </Canvas>
    </div>
  )
}

export default memo(Hero)