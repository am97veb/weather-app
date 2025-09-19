import { useLocation } from "react-router-dom";
import { CityList, StyledCityItem, Wrapper } from "./styled";
import { useManyCitiesWeather } from "../useManyCitiesWeather";
import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import { cities } from "../selectedCities";
import { Place } from "./Place";
import { CurrentWeather } from "./CurrentWeather";
import { WeatherForecast } from "./WeatherForecast";

export const Weather = () => {
  const { pathname } = useLocation();
  const weatherInCities = useManyCitiesWeather(cities, pathname);
  const isLoading = weatherInCities.some((query) => query.isLoading);
  const error = weatherInCities.some((query) => query.error);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <CityList special={pathname === "/currentWeather" ? false : true}>
        {weatherInCities.map((weather, index) => {
          if (!weather.data) {
            return null;
          }
          const data = weather.data;

          return (
            <StyledCityItem
              special={pathname === "/currentWeather" ? false : true}
              key={index}
            >
              <Place
                name={data.location.name}
                country={data.location.country}
              />
              {pathname === "/currentWeather" ? (
                <CurrentWeather
                  special={pathname === "/currentWeather" ? false : true}
                  temperature={data.current.temp_c}
                  text={data.current.condition.text}
                  icon={data.current.condition.icon}
                />
              ) : (
                <WeatherForecast forecastday={data.forecast?.forecastday || []} />
              )}
            </StyledCityItem>
          );
        })}
      </CityList>
    </Wrapper>
  );
};