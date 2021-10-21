import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'
import { a as web } from '@react-spring/web'
import Lottie from "lottie-react";
import { Widget , PopupButton } from '@typeform/embed-react'

export const Sala = styled(Canvas)`
  border-radius: 20px;
  height: 100%;
  width: 50%;
  
  
  @media screen and (max-width: 800px) {
    height: 70%;
    width: 100%;
  }
`;

export const Img = styled(Lottie)`
  border-radius: 20px;
  height: 70%;
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
  :hover{
     transform: rotate(2deg);
  }
`;


export const SalaContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 2rem;
  display: flex;
  background-color: #f0f0f0;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 90vh;
     width: 100vw;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 200vh;
     width: 100vw;
  }
`;

export const Azienda = styled.div`
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  background-color:#f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Desc = styled.div`
  width: 100vw;
  border-radius: 20px;
  background-color:#f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
`;

export const Form = styled.div`
  width: 100vw;
  background-color: #2F2F2F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 3rem;
  color: #f0f0f0;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 6rem 3rem;
  }
`;

export const Button = styled(PopupButton)`
  padding: 20px;
  border-radius: 20px;
  color: #f0f0f0;
  background-color: #2f2f2f;
  font-weight: bold;
  font-size: 1em;
  border: none;
  margin: 3rem;
`;

export const WebDiv = styled(web.div)`
  height: 100vh;
  width: 100vw;
  padding: 0;
  background-color: black;
  display: flex;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const WebHome = styled(web.div)`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:0;
  @media screen and (max-width: 800px) {
    height: 30%;
    width: 100%;
  }
`;

export const H1 = styled(web.h1)`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 4em;
  letter-spacing: -0.075em;
  white-space: nowrap;
  font-family: inter;
  display: flex;
  align-items: center;
  img {
    margin-left: 20px;
  }
`;

export const H2 = styled(web.h2)`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  letter-spacing: -0.075em;
  white-space: nowrap;
  font-family: inter;
  text-align: center;
  margin-top: 20px;
  font-weight: normal;
`;

export const UP = styled(web.p)`
  font-family: inter;
  font-weight: 600;
  margin:0;
  font-size: 4rem;
  letter-spacing: -0.075em;
  white-space: nowrap;
  word-break: normal;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
        height: 30%;
        width: 100%;
        padding-top: 20vh;
}
`;


export const Title = styled.div`
 height: 100%;
 width: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 @media screen and (max-width: 800px) {
    width: 100%;
  
}
`;

export const SagraBot = styled.h1`
 margin: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 50px;
 font-weight: bold;
 font-family: inter;
`;

export const P = styled.div`
 padding: 10vw;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 40px;
 font-weight: bold;
 font-family: inter;
 p {
    font-size: 1rem;
    font-weight: 400;
 }
 span{
    font-size: 1rem;
    color: blueviolet;
 }
`;

export const Flex = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 1rem;
 font-family: inter;
 p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
 }
`;

export const Text = styled.p`
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: 600;
 font-size: 1em;
 letter-spacing: -0.075em;
 white-space: nowrap;
 font-family: inter;
`;

export const Table = styled.table`
  td, th {
    text-align: left;
    padding: 0.5em 2rem;
    font-size: 1rem;
  letter-spacing: -0.075em;
  white-space: nowrap;
  font-family: inter;
  margin-top: 20px;
  font-weight: normal;
  }
  th {
    border-bottom: 1px solid #444;
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
`;