import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame ,meshDepthMaterial} from '@react-three/fiber'
import niceColors from 'nice-color-palettes'
import Effects from './Effects'
import './styles.css'
import { OrbitControls } from '@react-three/drei'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const data = Array.from({ length: 1000 }, () => ({ color: niceColors[17][Math.floor(Math.random() * 5)], scale: 1 }))

function Boxes() {
  const [hovered, set] = useState()
  const colorArray = useMemo(() => Float32Array.from(new Array(1000).fill().flatMap((_, i) => tempColor.set(data[i].color).toArray())), [])
  const meshRef = useRef()
  const prevRef = useRef()
  useEffect(() => void (prevRef.current = hovered), [hovered])
  useFrame((state) => {
    
    let i = 0
    for (let x = 0; x < 30; x++)
      for (let y = 0; y < 30; y++)
     {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 0)
          tempObject.rotation.z = tempObject.rotation.y * 2
          const scale = (data[id].scale = THREE.MathUtils.lerp(data[id].scale, id === hovered ? 2 : 0.8, 0.1))
          tempObject.position.z=scale
          tempObject.updateMatrix()
          meshRef.current.setMatrixAt(id, tempObject.matrix)
        }
    meshRef.current.instanceMatrix.needsUpdate = true
  })
  console.log(tempObject)
  return (
    <instancedMesh ref={meshRef} position={[20,10,0]} rotation={[-1,-0.2,-0.5]} args={[null, null, 25000]} onClick={(e) => set(e.instanceId)} >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} color="pink" />
      <meshDepthMaterial attach="material" color="teal" />
    </instancedMesh>
  )
}

ReactDOM.render(
  <Canvas
    linear
    gl={{ antialias: false, alpha: false }}
    camera={{ position: [0, 0, 15], near: 1, far: 100 }}
    onCreated={({ gl }) => gl.setClearColor('#f0f0f0')}>
    <ambientLight />
    <pointLight position={[150, 150, 150]} intensity={0.55} />
    <Boxes />
    <Effects />
    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
  </Canvas>,
  document.getElementById('root')
)
