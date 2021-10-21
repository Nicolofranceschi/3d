

import Effects from './Effects'
import './styles.css'
import { Boxes } from './tempObject'
import { getUserDocument } from './firebae'
import { useEffect, useState, useRef } from 'react'
import { SagraBot, Sala, SalaContainer, Form, Title,Flex, Button, Text, Npm, Container, Azienda, Desc, TextContainer, Img, P, Table } from "./styled"
import { useWindowSize } from "./useWindowsSize";
import { useForm, ValidationError } from '@formspree/react';
import Start from "./Start";
import bimbo from "./animation.json"
import Masonry from "./gallery"
import Gira from "./gira"
import { Controller, Scene } from 'react-scrollmagic';
import logo from './assets/logo.png';

const SALEUID = 'sala';
let a=0;
let temp=0;

export default function App() {

    const [datas, setDatas] = useState();
    const { height, width } = useWindowSize();

    const sagra = useRef()
    const [state, handleSubmit] = useForm("xoqyrqyp");
    if (state.succeeded) {
        console.log("Thanks for joining!");
    }

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

    
    const [open, setOpen] = useState(false)
    const [animation, setAnimation] = useState(0);

    window.onscroll = function () {
        scrollOpen();
        scrollRotate();
    };
    function scrollRotate() {
        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = sagra.current?.getBoundingClientRect();
        const offset = elemRect.top - bodyRect.top;
        if (window.pageYOffset > offset - height/2) {
            a=temp<window.pageYOffset ? a+1 : a-1;
            setAnimation(a)
            temp = window.pageYOffset;
        }else a=0;
    }

    function scrollOpen() {
        if (window.pageYOffset > 5) setOpen(true);
        if (window.pageYOffset < 5) setOpen(false);
    }

    if (datas) return (
        <>
        
            <Start open={open} height={height} width={width} setOpen={setOpen} ></Start>
            <Azienda>
                <TextContainer>
                    <Img animationData={bimbo} ></Img>
                    <Title>
                        <P>Siamo uniti da una visione<br /><br />
                            <span style={{ color: "orange" }}>Supportare lo sviluppo tecnologico con idee innovative</span>
                            <p>Crediamo nell’innovazione, ogni giorno ci impegniamo per sviluppare la tecnologia per il tuo successo.<br /><br />

                                Ti aiutiamo a fare meglio, grazie alle soluzioni che fanno la differenza in un mercato sempre più competitivo e sempre più veloce.<br /><br /> Crediamo che essere innovativi significhi creare e distribuire valore a una comunità.<br />

                                Per questo nel nostro lavoro quotidiano ci mettiamo il nostro cervello e anche il nostro cuore.
                            </p>
                        </P>
                    </Title>
                </TextContainer>
            </Azienda>
            <Masonry></Masonry>
            <Controller>

                <Scene duration={1200} pin triggerHook={0}>
                    <SalaContainer >
                        <Title>
                            <SagraBot ref={sagra}>SAGRABOT</SagraBot>
                            <Text>new visual booking system</Text>
                        </Title>
                        <Sala
                            shadowMap={true}
                            camera={{
                                position: [0, 0, 1],
                                near: 1,
                                far: 50,
                            }}
                            onCreated={({ gl }) => gl.setClearColor('#f0f0f0')}
                        >
                            <ambientLight />
                            <spotLight castShadow={true} intensity={1} position={[0, 20, 10]} />
                            <Boxes datas={datas} height={height} width={width} animation={animation} />
                            <Effects />
                        </Sala>
                    </SalaContainer>
                </Scene>
            </Controller>
            <Desc>
                <Container>
                    <Title>
                        <P>Scopri l' app che sta rivoluzionando il mondo delle sagre<br /><br />
                            <span style={{ color: "orange" }}>REACT,FIREBASE</span>
                            <p>Prenota online con con sagrabot con la nuova UI 2D<br /><br />

                                Passa anche tu a sagrabot e tiene sotto controllo l'afflusso di persone nella tua sagra<br /><br />garantendo il distanziamento con la funzione Posto Covid<br /><br />

                                Goditi la piacevole interfaccia di sagrabot per gestire il tuo cliente anche ache quando è al tavolo con la funzione cassa e genera ricevuta</p></P>
                    </Title>
                    <Gira></Gira>
                </Container>
            </Desc>

            <Form>
                <Table>
                    <thead>
                        <tr>
                            <th>Sales</th>
                            <th>Development</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>per informazioni</td>
                            <td>Nicolò Franceschi</td>
                        </tr>
                        <tr>
                            <td>contattare</td>
                            <td>+39 345 513 2071</td>
                        </tr>
                        <tr>
                            <td>info@pineappsrl.com</td>
                            <td>info@pineappsrl.com</td>
                        </tr>
                    </tbody>
                </Table>
                <Flex>
                <img src={logo} style={{ height: '70px'  , margin: "1rem"}}/>
                <p>PineApp srl</p>
                <p>VIA APPIA, 31,<br/> 40026, Imola, Bologna</p>
                <p>P.iva: 00835181207</p>
                </Flex>
            </Form>

        </>
    );
    return (
        <div>Caricamento...</div>
    )
}