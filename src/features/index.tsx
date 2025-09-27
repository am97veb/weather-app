import { useLocation } from "react-router-dom";
import { RemoveCityButton, CityList, StyledCityItem, Wrapper } from "./styled";
import { useCitiesWeather } from "../useCitiesWeather";
import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import { Place } from "./Place";
import { CurrentWeather } from "./CurrentWeather";
import { WeatherForecast } from "./WeatherForecast";
import { Search } from "./Search";
import { weatherEndpoints } from "../weatherEndpoints";
import { useCities } from "../useCities";

export const Weather = () => {
  const { pathname } = useLocation();
  const {cities, addCity, deleteCity} = useCities();

  const endpoint =
    pathname === "/currentWeather"
      ? weatherEndpoints.CURRENT
      : weatherEndpoints.FORECAST;

  const weatherInCities = useCitiesWeather(cities, endpoint);
  const isLoading = weatherInCities?.some((city) => city.isLoading);
  const error = weatherInCities?.some((city) => city.error);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Search addCity={addCity} />
      <Wrapper>
        <CityList special={pathname === "/currentWeather" ? false : true}>
          {weatherInCities?.map((weather, index) => {
            if (!weather.data) {
              return null;
            }
            const data = weather.data;
            if (Array.isArray(data)) {
              return null;
            }
            return (
              <StyledCityItem
                special={pathname === "/currentWeather" ? false : true}
                key={index}
              >
                <RemoveCityButton onClick={() => deleteCity(index)}>✖</RemoveCityButton>
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
                  <WeatherForecast
                    forecastday={data.forecast?.forecastday || []}
                  />
                )}
              </StyledCityItem>
            );
          })}
        </CityList>
      </Wrapper>
    </>
  );
};
