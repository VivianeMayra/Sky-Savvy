"use client"

import { Header } from "@/components/Header"
import { Cloud } from "../page"
import { useState } from "react"
import { MagnifyingGlass } from "@phosphor-icons/react"
import axios from "axios"
import { useForecast } from "@/Context/ForecastContext"
import { Slide } from "./components/Slide"

export default function Forecast() {
  const [city, setCity] = useState("")
  const { forecastData, setForecastData } = useForecast()

  const handleSearchForecastWeather = async () => {
    if (!city.trim()) {
      return
    }

    try {
      const response = await axios.get(
        `http://localhost:4000/weather/forecast?city=${city}`
      )
      console.log("Resposta da API:", response.data)
      setForecastData(response.data)
    } catch (error) {
      console.log("Erro ao chamar API:", error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="relative bg-gradient-to-r from-blue-600 to-green-400 min-h-screen flex  flex-col">
        <div className="absolute top-0 left-0 w-full h-full">
          <Cloud style={{ bottom: "20%", right: "1%" }} />
          <Cloud style={{ bottom: "10%", right: "25%" }} />
          <Cloud style={{ bottom: "15%", right: "60%" }} />
        </div>
        <div className="text-white  m-5">
          <p className=" text-2xl">
            Quer <strong>ficar preparado para o clima</strong> que vai
            enfrentar?
          </p>
          <span>Consulte agora sua previsão da semana!</span>
        </div>
        <div className="flex items-center justify-center z-10">
          <div className="relative w-3/4">
            <input
              type="text"
              placeholder="Buscar por cidade"
              required
              className="text-current rounded-md border-zinc-900 pl-2 pt-2 pb-2 w-full focus:border-cyan-950 focus:outline-none"
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearchForecastWeather}
              className="absolute right-0 top-0 h-full bg-amber-400 hover:bg-amber-500 w-10 p-2 rounded-md flex items-center cursor-pointer"
            >
              <MagnifyingGlass size={32} color="white" />
            </button>
          </div>
        </div>
        {forecastData && (
          <div className="flex justify-center">
            <div className="w-3/4 mt-4">
              <Slide forecastData={forecastData} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
