import { IApiResponse } from "@/app/types/api";
import { Cities, IWeatherPayload } from "@/app/types/data";
import { Dispatch, SetStateAction, useEffect } from "react";

export const useFetchWeather = (city: Cities, setWeatherData: Dispatch<SetStateAction<IWeatherPayload | null>>) => {
  const fetchWeather = async () => {
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const { data } = await response.json() as IApiResponse;

      setWeatherData(data);
    } catch (error) {
      console.error("Failed fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather()
    }
  }, [city, fetchWeather])
}