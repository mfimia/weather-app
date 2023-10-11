import { screen, render } from "@testing-library/react"
import { IWeather } from "@/app/types/data";
import WeatherInfo from "./WeatherInfo";

const mockCurrentWeather: IWeather = {
  date: "2023-10-06",
  temperature: 22,
  condition: "Sunny",
  iconUrl: "https://example.com/sunny-icon.png",
  humidity: 58,
  windSpeed: 10
};


describe('DayForecast', () => {
  it('should render correctly', () => {
    render(<WeatherInfo currentWeather={mockCurrentWeather} />)
    const weatherInfoElement = screen.getByTestId('weatherInfo')

    expect(weatherInfoElement).toBeVisible()
    expect(weatherInfoElement).toMatchSnapshot()
  })
})