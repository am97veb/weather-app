import {
  Place,
  StyledCityItem,
  City,
  Icon,
  Country,
  Temperature,
  Description,
  WeatherDetails,
} from "./styled";
import { CityItemProps } from "./types";

export const CityItem = ({
  name,
  country,
  temperature,
  text,
  icon,
}: CityItemProps) => (
  <StyledCityItem>
    <Place>
      <City>{name}</City>
      <Country>{country}</Country>
    </Place>
    <Temperature>{temperature}°C</Temperature>
    <WeatherDetails>
      <Description>{text}</Description>
      <Icon src={`https:${icon}`} alt={text} />
    </WeatherDetails>
  </StyledCityItem>
);
