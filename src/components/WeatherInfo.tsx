import { IWeather } from '@/app/types/data'
import Image from 'next/image'
import React, { FC } from 'react'

interface IWeatherInfoProps {
  currentWeather: IWeather
}

const WeatherInfo: FC<IWeatherInfoProps> = ({ currentWeather }) => {
  return (
    <div data-testid="weatherInfo">
      <div className="flex items-center mb-4">
        <Image
          className="mr-4"
          src={currentWeather.iconUrl}
          alt={currentWeather.condition}
          width={64}
          height={64}
        />
        <div>
          <p className="text-xl">{`Temperature: ${currentWeather.temperature}°C`}</p>
          <p className="text-gray-600">{`Condition: ${currentWeather.condition}`}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">{`Humidity: ${currentWeather.humidity}%`}</p>
        <progress
          value={currentWeather.humidity}
          max="100"
          className="w-full h-2 bg-blue-200"
        ></progress>
      </div>
      <p className="text-gray-600 mb-4">{`Wind Speed: ${currentWeather.windSpeed} km/h`}</p>
    </div>
  )
}

export default WeatherInfo
