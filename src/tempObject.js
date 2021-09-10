import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';


const tempObject = new THREE.Object3D();
const blue = new THREE.Color("white");

const data = Array.from({ length: 25000 }, () => ({ color: "pink", scale: 1 }));

export function Boxes({ datas , animation}) {

    const [hovered, set] = useState();

    const meshRef = useRef();
    const prevRef = useRef();

    useEffect(() => void (prevRef.current = hovered), [hovered]);
    
    useFrame((state) => {
        let i = 0;
        for (let x = 0; x < 50; x++)
            for (let z = 0; z < 50; z++) {
                const id = i++;
                tempObject.position.set(x, 0, z);
                if (datas[id]) {
                    
                    if (datas[id].type === 1 && (datas[id].color === "OliveDrab" || datas[id].color === "SkyBlue")) {
                        //console.log(datas[id].color)
                        tempObject.position.y = 0.5;
                        tempObject.scale.y = 2;
                        meshRef.current.setColorAt(id, new THREE.Color("black"));

                    }
                    else if (datas[id].type === 0 && datas[id].color === "SkyBlue") {
                        //console.log(datas[id].color)
                        tempObject.position.y = 2;
                        tempObject.scale.y = 0.5;
                        meshRef.current.setColorAt(id, new THREE.Color("SkyBlue"));

                    }
                    else if (datas[id].type === 0 && datas[id].color === "OliveDrab") {
                        //console.log(datas[id].color)
                        tempObject.position.y = 2;
                        tempObject.scale.y = 0.5;
                        meshRef.current.setColorAt(id, new THREE.Color("OliveDrab"));

                    }
                    else if (datas[id].type === 2 && (datas[id].color === "OliveDrab" || datas[id].color === "SkyBlue")) {
                        //console.log(datas[id].color)
                        tempObject.position.y = 2;
                        tempObject.scale.y = 0.5;
                        meshRef.current.setColorAt(id, new THREE.Color(datas[id].color));
                    }
                    else {

                        tempObject.position.y = 0;
                        tempObject.scale.y = 0;
                        meshRef.current.setColorAt(id, new THREE.Color(datas[id].color));
                    }
                }else {
                    tempObject.position.y = 0;
                    tempObject.scale.y = 0;
                    meshRef.current.setColorAt(id, blue);
                
                }

                tempObject.updateMatrix();
                meshRef.current.setMatrixAt(id, tempObject.matrix);
            }
        meshRef.current.instanceMatrix.needsUpdate = true;

    }, [datas]);


    return (
        <instancedMesh
            ref={meshRef}
            // y scroll variabile
            position={[-animation/10, -14-animation/10, -20+animation/10]}
            rotation={[-animation/200, 5+animation/200, 0.6+animation/200 ]}
            args={[null, null, 5000]}
            castShadow={true}
            receiveShadow={true}
            onClick={(e) => set(e.instanceId)}>
            <boxBufferGeometry attach="geometry" args={[1, 0.5, 1]} />
            <meshPhongMaterial
                flatShading={true}
                roughness={1}
                metalness={0.5}
                shininess={100}
                attach="material"

            />
        </instancedMesh>
    )
}
