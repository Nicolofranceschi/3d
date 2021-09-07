import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Controls, useControl } from "react-three-gui";

const tempObject = new THREE.Object3D();
const blue = new THREE.Color("hsl(218, 24%, 15%)");

const data = Array.from({ length: 25000 }, () => ({ color: "pink", scale: 1 }));

export function Boxes({ datas }) {

    const [hovered, set] = useState();

    const [animation, setAnimation] = useState(0);

    const meshRef = useRef();
    const prevRef = useRef();

    useEffect(() => void (prevRef.current = hovered), [hovered]);

    window.onscroll = function () {
        scrollRotate();
    };
    
    function scrollRotate() {
        console.log(window.pageYOffset/2 )
        setAnimation(window.pageYOffset/2 )
        
    }

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
                        meshRef.current.setColorAt(id, new THREE.Color(datas[id].color));

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
            position={[-animation/40, -20+animation/40, -animation/40]}
            rotation={[animation/200, 9-animation/200, 0.1]}
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
