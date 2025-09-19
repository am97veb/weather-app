import { Day, Forecast, ForecastTemperature, ForecastWrapper, MinMaxTemp, Shortcut } from "./styled";
import { WeatherForecastProps } from "./types";
import { dateFormatter } from "../../common/dataFormatter";

export const WeatherForecast = ({
  forecastday}: WeatherForecastProps) => (
  <ForecastWrapper>
    {!forecastday
      ? null
      : forecastday.map((day) => (
          <Forecast>
            <Day>{dateFormatter(day.date)}</Day>
            <MinMaxTemp>
              <Shortcut>max</Shortcut>{" "}
              <ForecastTemperature>{day.day.maxtemp_c}°C</ForecastTemperature>
            </MinMaxTemp>
            <MinMaxTemp>
              <Shortcut>min</Shortcut>{" "}
              <ForecastTemperature>{day.day.mintemp_c}°C</ForecastTemperature>
            </MinMaxTemp>
          </Forecast>
        ))}
  </ForecastWrapper>
);
