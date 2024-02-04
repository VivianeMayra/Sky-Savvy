// src/context/WeatherContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

interface WeatherData {
  city: string
  main: string
  description: string
  temp: number
  thermalSensation: number
  tempMin: number
  tempMax: number
}

interface WeatherContextProps {
  weatherData: WeatherData | null
  setWeather: (data: WeatherData) => void
  selectedUnit: string
  setSelectedUnit: (unit: string) => void
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined)

interface WeatherProviderProps {
  children: ReactNode
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [selectedUnit, setSelectedUnit] = useState("metric")

  const setWeather = (data: WeatherData) => {
    setWeatherData(data)
  }

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeather, selectedUnit, setSelectedUnit }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = (): WeatherContextProps => {
  const context = useContext(WeatherContext)

  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider")
  }

  return context
}
