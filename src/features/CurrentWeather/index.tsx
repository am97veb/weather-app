import { WeatherDescription } from "../WeatherDescription";
import { CurrentTemperature } from "./styled";
import { CurrentWeatherProps } from "./types";

export const CurrentWeather = ({
  temperature,
  text,
  icon,
  bigTile,
}: CurrentWeatherProps) => {
  return (
    <>
      <CurrentTemperature>{temperature}°C</CurrentTemperature>
      <WeatherDescription text={text} icon={icon} bigTile={bigTile} />
    </>
  );
};
