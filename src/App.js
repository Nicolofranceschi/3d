
import { Canvas } from '@react-three/fiber'
import Effects from './Effects'
import './styles.css'
import { OrbitControls } from '@react-three/drei'
import { Boxes } from './tempObject'
import { getUserDocument } from './firebae'
import { useEffect, useState } from 'react'
import { Controls, useControl } from "react-three-gui";

const SALEUID = 'sala';

export default function App() {

    const [datas, setDatas] = useState();

    useEffect(() => {
        async function doStuff() {
            try {
                const res = await getUserDocument(SALEUID);
                if (!res) throw new Error("ERRORE 😞, ricarica");
                setDatas(res?.sale['SAGRA']);
            } catch (error) {
                console.log(error)
            }
        }
        doStuff();
    }, []);

    
   if (datas) return (
    <>
        <Canvas
           shadowMap={true}
            camera={{
                position: [0, 0, 1],
                near: 1,
                far: 1000,
            }}
            onCreated={({ gl }) => gl.setClearColor('#f0f0f0')}
            >
             <ambientLight />
             <spotLight castShadow={true} intensity={0.6} position={[0, 10, 10]} />
            <Boxes datas={datas} />
            <Effects />
            <OrbitControls  enableZoom={false}  />
        </Canvas>
        <div></div>
        <h1>Sagrabot</h1>
    </>
    );else return (
         <div>Caricamento...</div>
    )
}