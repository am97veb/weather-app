import { RemoveCityButton, StyledCityItem, StyledLink } from "./styled";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import { Place } from "../Place";
import { CityItemProps } from "./types";
import { toWeatherDetails } from "../../core/routes";

export const CityItem = ({ id, isForecast, data, onDelete }: CityItemProps) => {
  if (Array.isArray(data)) {
    return null;
  }
  return (
    <StyledCityItem forecastView={isForecast}>
      <RemoveCityButton onClick={() => onDelete(id)}>✖</RemoveCityButton>
      <StyledLink to={toWeatherDetails({ name: data.location.name })}>
        <Place name={data.location.name} country={data.location.country} />
        {!isForecast ? (
          <CurrentWeather
            forecastView={isForecast}
            temperature={data.current.temp_c}
            text={data.current.condition.text}
            icon={data.current.condition.icon}
          />
        ) : (
          <WeatherForecast
            forecastday={data.forecast?.forecastday || []}
            forecastView={isForecast}
          />
        )}
      </StyledLink>
    </StyledCityItem>
  );
};
