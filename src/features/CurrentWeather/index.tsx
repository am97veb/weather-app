import {
  CurrentTemperature,
  Description,
  Icon,
  WeatherDetails,
} from "./styled";
import { CurrentWeatherProps } from "./types";

export const CurrentWeather = ({
  temperature,
  text,
  icon,
  special,
}: CurrentWeatherProps) => (
  <>
    <CurrentTemperature special={special}>{temperature}°C</CurrentTemperature>
    <WeatherDetails special={special}>
      <Icon src={`https:${icon}`} alt={text} />
      <Description>{text}</Description>
    </WeatherDetails>
  </>
);
