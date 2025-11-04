import { CurrentWeatherProps, WeatherForecast } from "../../../types";

export interface WeatherDetailsInBigTilesProps {
  current: CurrentWeatherProps;
  forecast: WeatherForecast;
}