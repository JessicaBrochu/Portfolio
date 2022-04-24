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
        {...props}
      >
        <PointMaterial
          // FIXME find a way to remove this typing error
          //@ts-ignore
          transparent
          color="#ffa0e0"
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
    <div className='hero'>
    <div className='hero-text'>
      <h1>Jessica Brochu</h1>
      <h2>Développeuse Web Junior</h2>
    </div>
    <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
    </div>
  )
}

export default Hero