// src/context/ForecastContext.tsx
"use client"
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react"

interface ForecastData {
  city: string
  date: string
  main: string
  description: string
  temp: number
  thermalSensation: number
  tempMin: number
  tempMax: number
}

export interface ForecastList {
  list: ForecastData[]
  city: string
}

interface ForecastContextProps {
  forecastData: ForecastList | null
  setForecastData: Dispatch<SetStateAction<ForecastList | null>>
}

const ForecastContext = createContext<ForecastContextProps | undefined>(
  undefined
)

interface ForecastProviderProps {
  children: ReactNode
}

export const ForecastProvider: React.FC<ForecastProviderProps> = ({
  children,
}) => {
  const [forecastData, setForecastData] = useState<ForecastList | null>(null)

  const forecastContextValue = useMemo(
    () => ({ forecastData, setForecastData }),
    [forecastData, setForecastData]
  )

  return (
    <ForecastContext.Provider value={forecastContextValue}>
      {children}
    </ForecastContext.Provider>
  )
}

export const useForecast = (): ForecastContextProps => {
  const context = useContext(ForecastContext)

  if (!context) {
    throw new Error("useForecast must be used within a ForecastProvider")
  }

  return context
}
