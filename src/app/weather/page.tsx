"use client"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { LanguageSelection } from "@/components/languageSelection"
import { UnitSelection } from "@/components/unitSelection"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useWeather } from "@/Context/WeatherContext"
import { Cloud } from "../page"

export default function Weather() {
  const [selectedLang, setSelectedLang] = useState("pt_br")
  const [city, setCity] = useState("")
  const [error, setError] = useState(false)

  const router = useRouter()
  const { setWeather, selectedUnit } = useWeather()

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang)
  }

  const handleSearchWeather = async () => {
    if (!city.trim()) {
      setError(true)
      return
    }
    try {
      const response = await axios.get(
        `http://localhost:4000/weather/current?city=${city}&units=${selectedUnit}&lang=${selectedLang}`
      )

      console.log("Resposta da API:", response.data)
      //  aplicando contexto

      setWeather(response.data)

      router.push("/weather/current")
    } catch (error) {
      console.log("Erro ao chamar a API:", error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
    setError(false)
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="relative bg-gradient-to-r from-blue-600 to-green-400 min-h-screen flex items-center justify-center flex-col">
        <div className="absolute top-0 left-0 w-full h-full">
          <Cloud style={{ top: "15%", left: "10%" }} />
          <Cloud style={{ top: "15%", left: "50%" }} />
          <Cloud style={{ top: "3%", left: "25%" }} />
          <Cloud style={{ top: "1%", left: "60%" }} />
          <Cloud style={{ bottom: "20%", right: "1%" }} />
          <Cloud style={{ bottom: "10%", right: "25%" }} />
          <Cloud style={{ bottom: "15%", right: "60%" }} />
        </div>
        <div className="container mx-auto w-11/12 md:w-auto bg-cyan-400 shadow-lg p-5 gap-4 rounded-lg space-y-4 z-10 ">
          <p className="font-bold text-white">
            Confira aqui o clima de uma cidade:
          </p>
          <div className="flex items-center">
            <div className="flex-grow">
              <input
                type="text"
                value={city}
                placeholder="Buscar por cidade"
                required
                className="text-current rounded-md border-zinc-900 pl-2 pt-2 pb-2 w-full focus:border-cyan-950 focus:outline-none"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500">
              Por favor, preencha este campo obrigatório.
            </p>
          )}
          <hr />
          <UnitSelection />
          <LanguageSelection
            selectedLang={selectedLang}
            onSelectLang={handleSelectLang}
          />
          <Button onClick={handleSearchWeather} />
        </div>
      </main>
    </div>
  )
}
