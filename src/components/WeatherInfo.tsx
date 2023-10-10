import { IWeather } from '@/app/types/data'
import React, { FC, Fragment } from 'react'

interface IWeatherInfoProps {
  currentWeather: IWeather
}

const WeatherInfo: FC<IWeatherInfoProps> = ({ currentWeather }) => {
  return (
    <Fragment>
      <div className="flex items-center mb-4">
        <img
          className="w-16 h-16 mr-4"
          src={currentWeather.iconUrl}
          alt={currentWeather.condition}
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
    </Fragment>
  )
}

export default WeatherInfo
