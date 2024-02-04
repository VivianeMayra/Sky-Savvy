import { useWeather } from "../../Context/WeatherContext"

export function UnitSelection() {
  const { selectedUnit, setSelectedUnit } = useWeather()

  const units = ["metric", "imperial"]

  const handleSelectUnit = (unit: string) => {
    setSelectedUnit(unit)
  }

  return (
    <div>
      <p className="text-white font-medium">
        Escolha a unidade de medida de sua preferência:
      </p>
      <div className="flex flex-row gap-4">
        {units.map((unit) => (
          <label key={unit} className="flex items-center space-x-2">
            <input
              type="radio"
              value={unit}
              checked={selectedUnit === unit}
              onChange={() => handleSelectUnit(unit)}
            />
            <span className="text-white font-medium">
              {unit === "metric" ? "Celcius" : "Fahrenheit"}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
