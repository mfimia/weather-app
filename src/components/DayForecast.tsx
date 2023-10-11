import { IWeather } from '@/app/types/data'
import Image from 'next/image'
import { FC } from 'react'

interface IDayForecastProps {
  forecast: IWeather
}

const DayForecast: FC<IDayForecastProps> = ({ forecast }) => {
  return (
    <div data-testid="dayForecast" className="p-2 border rounded shadow-sm">
      <Image
        className="mb-2"
        src={forecast.iconUrl}
        alt={forecast.condition}
        width={40}
        height={40}
      />
      <p className="text-gray-700 font-medium">{forecast.date}</p>
      <p>{`Temperature: ${forecast.temperature}°C`}</p>
      <p className="text-sm text-gray-600">{`Condition: ${forecast.condition}`}</p>
    </div>
  )
}

export default DayForecast
