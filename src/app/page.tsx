"use client"
import { Header } from "@/components/Header"
import styled, { keyframes } from "styled-components"

export const moveCloud = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

// Estilize o componente da nuvem
export const Cloud = styled.div`
  background-image: url("/cloud.png");
  background-size: contain;
  width: 320px;
  height: 100px;
  position: absolute;
  animation: ${moveCloud} linear infinite 30s;
  z-index: 0;
`

const Main = styled.main`
  background-image: linear-gradient(to right, #3b82f6, #10b981);
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main>
        <div className="absolute top-0 left-0 w-full h-full">
          <Cloud style={{ top: "20%", left: "10%" }} />
          <Cloud style={{ top: "10%", left: "30%" }} />
          <Cloud style={{ bottom: "20%", right: "10%" }} />
          <Cloud style={{ bottom: "10%", right: "30%" }} />
        </div>
        <h1 className="text-4xl text-center md:text-5xl font-bold mb-4">
          Não seja pego de surpresa pelo clima!
        </h1>
        <p className="text-lg text-center mb-8">
          Obtenha informações meteorológicas em tempo real, previsões e mais com
          a Clima API.
        </p>
      </Main>
    </div>
  )
}
