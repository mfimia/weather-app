import React, { FC } from 'react';
import WeatherInfo from '@/components/WeatherInfo';
import DayForecast from '@/components/DayForecast';
import { IWeather, IWeatherPayload } from '../types/data';

interface JsonComponentProps {
  cityName?: string;
  text?: string;
  content?: string;
  currentWeather?: IWeather;
  forecast?: IWeather[];
};

const componentsMapping: Record<string, FC<JsonComponentProps>> = {
  header: ({ text }) => <h1 className="text-3xl font-extrabold mb-4 text-blue-700">{text}</h1>,
  text: ({ content }) => <p className="text-gray-600">{content}</p>,
  weatherInfo: ({ currentWeather }) => currentWeather ? <WeatherInfo currentWeather={currentWeather} /> : null,
  daysForecast: ({ forecast }) =>
    forecast ? <div className="mt-4 grid grid-cols-3 gap-4">{forecast.map(dayForecast => <DayForecast key={dayForecast.date} forecast={dayForecast} />)}</div> : null
};

interface JsonRendererProps {
  weatherData: IWeatherPayload;
}

interface ProcessedComponent {
  type: string;
  props: JsonComponentProps;
}

const JsonRenderer: FC<JsonRendererProps> = ({ weatherData }) => {
  const { currentWeather, forecast } = weatherData.cityData.reduce(
    (acc, dayData) => {
      if (dayData.date === 'current') {
        acc.currentWeather = dayData;
      } else {
        acc.forecast.push(dayData);
      }
      return acc;
    },
    { currentWeather: {}, forecast: [] as IWeather[] }
  );

  const components = weatherData.ui.map(component => {
    switch (component.type) {
      case 'header':
        return {
          type: component.type,
          props: {
            text: component.text?.replace('{cityName}', weatherData.cityName)
          }
        };
      case 'weatherInfo':
        return {
          type: component.type,
          props: { currentWeather }
        };
      case 'daysForecast':
        return {
          type: component.type,
          props: { forecast }
        };
      default:
        return component;
    }
  });

  return components.map((component, index) => {
    const Renderer = componentsMapping[component.type];
    const processedComponent = component as ProcessedComponent

    return <Renderer key={index} {...processedComponent.props} />;
  })
}

export default JsonRenderer;
