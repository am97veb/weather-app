export type FetchDataProps = 
 | City[]
 | {
  location: {
    name: string;
    country: string;
  };
  forecast?: WeatherForecast;
  current: CurrentWeather;
}

export interface City {
  name: string;
  id: number;
}

export interface CurrentWeather {
  temp_c: number;
  condition: ConditionProps;
}
export interface ConditionProps {
  text: string;
  icon: string;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: ConditionProps;
  };
}
export interface WeatherForecast {
  forecastday: ForecastDay[];
}
