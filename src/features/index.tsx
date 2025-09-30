import { useLocation } from "react-router-dom";
import { CityList, Wrapper } from "./styled";
import { useCitiesWeather } from "../useCitiesWeather";
import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import { Search } from "./Search";
import { useCities } from "../useCities";
import { setEndpoint } from "./setEndpoint";
import { CityItem } from "./CityItem";

export const Weather = () => {
  const { pathname } = useLocation();
  const { cities, addCity, deleteCity } = useCities();
  const endpoint = setEndpoint();

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
        <CityList special={pathname !== "/currentWeather"}>
          {weatherInCities?.map((weather, index) => {
            if (!weather.data) {
              return null;
            }
            return (
              <CityItem
                key={index}
                data={weather.data}
                isForecast={pathname !== "/currentWeather"}
                onDelete={deleteCity}
              />
            );
          })}
        </CityList>
      </Wrapper>
    </>
  );
};
