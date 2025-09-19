import { toCurrentWeather, toWeatherForecast } from "../routes";
import { Logo } from "./Logo";
import {
  BarWrapper,
  NavigationItem,
  NavigationList,
  NavigationLink,
} from "./styled";

export const Navigation = () => (
  <BarWrapper>
    <Logo />
    <NavigationList>
      <NavigationItem>
        <NavigationLink to={toCurrentWeather()}>current weather</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to={toWeatherForecast()}>
          weather forecast
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </BarWrapper>
);
