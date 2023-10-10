import { IWeather } from "@/app/types/data"
import { FC } from "react"

interface IDayForecastProps {
  forecast: IWeather
}

const DayForecast: FC<IDayForecastProps> = ({ forecast }) => {
  return (
    <div className="p-2 border rounded shadow-sm">
      <img className="w-10 h-10 mb-2" src={forecast.iconUrl} alt={forecast.condition} />
      <p className="text-gray-700 font-medium">{forecast.date}</p>
      <p>{`Temperature: ${forecast.temperature}°C`}</p>
      <p className="text-sm text-gray-600">{`Condition: ${forecast.condition}`}</p>
    </div>
  )
}

export default DayForecast