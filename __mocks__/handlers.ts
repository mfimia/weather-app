import { rest } from 'msw'
import weatherData from '../src/data/weather.json'
import { IWeatherData } from '../src/app/types/data'

const parsedWeatherData: IWeatherData = JSON.parse(JSON.stringify(weatherData))

export const handlers = [
  rest.get('http://localhost/api/weather', (req, res, ctx) => {
    const city = req.url.searchParams.get('city')

    if (!city) {
      return res(
        ctx.status(404),
        ctx.json({ code: 404, data: null, cityName: '' })
      )
    }

    const cityData = parsedWeatherData[city]

    if (!cityData) {
      return res(
        ctx.status(404),
        ctx.json({ code: 404, data: null, cityName: '' })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        data: { cityData, ui: parsedWeatherData.ui, cityName: city }
      })
    )
  })
]
