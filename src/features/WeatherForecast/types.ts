import { ForecastDay } from "../../types";

export interface WeatherForecastProps {
  forecastday?: ForecastDay[];
  special?: boolean;
}