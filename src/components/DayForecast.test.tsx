import { screen, render, waitFor } from '@testing-library/react'
import DayForecast from './DayForecast'
import { IWeather } from '@/app/types/data'

const mockForecast: IWeather = {
  date: '2023-10-06',
  temperature: 22,
  condition: 'Sunny',
  iconUrl: 'https://example.com/sunny-icon.png',
  humidity: 58,
  windSpeed: 10
}

describe('DayForecast', () => {
  it('should render correctly', () => {
    render(<DayForecast forecast={mockForecast} />)
    const dayForecastElement = screen.getByTestId('dayForecast')

    expect(dayForecastElement).toBeVisible()
    expect(dayForecastElement).toMatchSnapshot()
  })
})
