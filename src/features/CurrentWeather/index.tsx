import { WeatherDetails } from "../WeatherDetails";
import { CurrentTemperature } from "./styled";
import { CurrentWeatherProps } from "./types";

export const CurrentWeather = ({
  temperature,
  text,
  icon,
}: CurrentWeatherProps) => {
  return (
    <>
      <CurrentTemperature>{temperature}°C</CurrentTemperature>
      <WeatherDetails text={text} icon={icon} />
    </>
  );
};
