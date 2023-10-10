export interface IWeather {
  date: string
  temperature: number
  condition: string
  iconUrl: string
  humidity?: number
  windSpeed?: number
}

export interface UIComponent {
  type: string
  text: string
}

export interface CityWeatherData {
  [cityName: string]: IWeather[]
}

export interface UIData {
  ui: UIComponent[]
}

export type IWeatherData = CityWeatherData & UIData

export interface IWeatherPayload {
  cityName: Cities
  cityData: IWeather[]
  ui: UIComponent[]
}

export enum Cities {
  Düsseldorf = 'Düsseldorf',
  Málaga = 'Málaga',
  Berlin = 'Berlin'
}
