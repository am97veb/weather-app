import { CurrentWeatherProps, WeatherForecastProps } from "../../../types";

export interface WeatherDetailsInBigTilesProps {
  currentWeather: CurrentWeatherProps;
  forecastWeather: WeatherForecastProps;
}

export type WindMapperProps = Pick<WeatherDetailsInBigTilesProps, "currentWeather">;
export type SunMoonMapperProps = Pick<WeatherDetailsInBigTilesProps, "forecastWeather">