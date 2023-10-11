import { NextRequest, NextResponse } from 'next/server'
import weatherData from '../../../data/weather.json'
import {
  Cities,
  IWeather,
  IWeatherData,
  IWeatherPayload
} from '@/app/types/data'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const city = searchParams.get('city')

  if (!city) return NextResponse.json({ code: 404, data: null, cityName: '' })

  const parsedData: IWeatherData = JSON.parse(JSON.stringify(weatherData))

  const cityData: IWeather[] | undefined = parsedData[city] as IWeather[]

  if (!cityData)
    return NextResponse.json({ code: 404, data: null, cityName: '' })

  const data: IWeatherPayload = {
    cityData,
    ui: parsedData.ui,
    cityName: city as Cities
  }

  return NextResponse.json({ code: 200, data })
}
