'use client'

import React, { useState } from 'react'
import { Cities, IWeatherPayload } from './types/data'
import CitySelector from '@/components/CitySelector'
import { useFetchWeather } from '@/hooks/useFetchWeather'
import JsonRenderer from './utils/JsonRenderer'

const Home = () => {
  const [city, setCity] = useState<Cities>(Cities.Düsseldorf)
  const [weatherData, setWeatherData] = useState<IWeatherPayload | null>(null)

  useFetchWeather(city, setWeatherData)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-200 p-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-6 m-6 bg-white border rounded shadow-lg">
        <CitySelector city={city} setCity={setCity} />

        {weatherData && (
          <div className="mt-4 p-4 bg-gray-50 border rounded shadow-inner">
            <JsonRenderer weatherData={weatherData} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
