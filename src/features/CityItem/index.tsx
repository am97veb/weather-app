import { RemoveCityButton, StyledCityItem } from "./styled";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import { Place } from "../Place";
import { CityItemProps } from "./types";

export const CityItem = ({ id, isForecast, data, onDelete }: CityItemProps) => {
  if (Array.isArray(data)) {
    return null;
  }
  return (
    <StyledCityItem special={isForecast}>
      <RemoveCityButton onClick={() => onDelete(id)}>✖</RemoveCityButton>
      <Place name={data.location.name} country={data.location.country} />
      {!isForecast ? (
        <CurrentWeather
          special={isForecast}
          temperature={data.current.temp_c}
          text={data.current.condition.text}
          icon={data.current.condition.icon}
        />
      ) : (
        <WeatherForecast
          forecastday={data.forecast?.forecastday || []}
          special={isForecast}
        />
      )}
    </StyledCityItem>
  );
};
