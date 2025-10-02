import {
  Day,
  Forecast,
  ForecastWrapper,
  ForecastTemperature,
  MaximumShortcut,
  MaximumMinimumTemperatureHeader,
  MinimumShortcut,
} from "./styled";
import { WeatherForecastProps } from "./types";
import { dateFormatter } from "../../common/dataFormatter";
import { WeatherDetails } from "../WeatherDetails";

export const WeatherForecast = ({
  forecastday,
  special,
}: WeatherForecastProps) => (
  <ForecastWrapper>
    <MaximumMinimumTemperatureHeader>
      <MaximumShortcut>max</MaximumShortcut>
      <MinimumShortcut>min</MinimumShortcut>
    </MaximumMinimumTemperatureHeader>
    {!forecastday
      ? null
      : forecastday.map((day) => (
          <Forecast as="li">
            <Day>{dateFormatter(day.date)}</Day>
            <WeatherDetails
              icon={day.day.condition.icon}
              text={day.day.condition.text}
              special={special}
            />
            <ForecastTemperature>{day.day.maxtemp_c}°C</ForecastTemperature>
            <ForecastTemperature minimumTemperature>
              {day.day.mintemp_c}°C
            </ForecastTemperature>
          </Forecast>
        ))}
  </ForecastWrapper>
);
