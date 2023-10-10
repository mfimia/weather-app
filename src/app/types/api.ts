import { IWeatherPayload } from './data'

export interface IApiResponse {
  code: number
  data: IWeatherPayload
}
