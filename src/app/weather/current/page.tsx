"use client"

import { useWeather } from "@/Context/WeatherContext"
import { Header } from "@/components/Header"
import { CloudFog, Thermometer } from "@phosphor-icons/react"
import { Cloud } from "../../page"

export default function Current() {
  //aplicando contexto
  const { weatherData, selectedUnit } = useWeather()

  if (!weatherData) {
    // Lidere a situação em que os dados ainda não foram carregados
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Carregando dados...</p>
      </div>
    )
  }

  const { city, description, temp, thermalSensation, tempMin, tempMax } =
    weatherData

  // Função para obter o complemento da unidade de temperatura
  const getUnitSuffix = (unit: string) => {
    return unit === "metric" ? "°C" : "°F"
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="relative bg-gradient-to-r from-blue-600 to-green-400   min-h-screen flex items-center justify-center flex-col">
        <div className="absolute top-0 left-0 w-full h-full">
          <Cloud style={{ top: "15%", left: "10%" }} />
          <Cloud style={{ top: "15%", left: "50%" }} />
          <Cloud style={{ top: "3%", left: "25%" }} />
          <Cloud style={{ top: "1%", left: "60%" }} />
          <Cloud style={{ bottom: "20%", right: "1%" }} />
          <Cloud style={{ bottom: "10%", right: "25%" }} />
          <Cloud style={{ bottom: "15%", right: "60%" }} />
        </div>
        <div className="container mx-auto w-11/12 md:w-auto bg-cyan-400 shadow-lg p-4 gap-4 rounded-lg space-y-4 z-10">
          <p className="font-bold text-white text-center">
            Detalhes do clima hoje em <strong>{city}</strong>
          </p>
          <hr />
          <div className="flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">
              {temp}
              {getUnitSuffix(selectedUnit)}
            </h2>
            <Thermometer size={32} weight="light" color="white" />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <span className="font-medium">
              {description} com sensação térmica de {thermalSensation}{" "}
              {getUnitSuffix(selectedUnit)}
            </span>
            <div className="flex items-center justify-center">
              <CloudFog size={32} weight="light" color="white" />
              <span>
                Temp Min {tempMin} {getUnitSuffix(selectedUnit)} | Temp Máx{" "}
                {tempMax} {getUnitSuffix(selectedUnit)}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
