import { RemoveCityButton, StyledCityItem } from "./styled";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import { Place } from "../Place";
import { CityItemProps } from "./types";

export const CityItem = ({
  key,
  isCurrent,
  data,
  onDelete,
}: CityItemProps) => {
  if (Array.isArray(data)) {
    return null;
  }
  return (
    <StyledCityItem special={isCurrent} key={key}>
      <RemoveCityButton onClick={() => onDelete(key)}>✖</RemoveCityButton>
      <Place name={data.location.name} country={data.location.country} />
      {isCurrent ? (
        <CurrentWeather
          special={isCurrent}
          temperature={data.current.temp_c}
          text={data.current.condition.text}
          icon={data.current.condition.icon}
        />
      ) : (
        <WeatherForecast forecastday={data.forecast?.forecastday || []} />
      )}
    </StyledCityItem>
  );
};
