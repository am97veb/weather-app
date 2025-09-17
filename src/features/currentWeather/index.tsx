import { CityItem } from "../../common/CityItem";
import { CityList, Wrapper } from "./styled";
import { useManyCitiesWeather } from "../../useManyCitiesWeather";
import { cities } from "../../selectedCities";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const CurrentWeather = () => {
  const weatherInCities = useManyCitiesWeather(cities);
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
      <CityList>
        {weatherInCities.map((weather, index) => {
          if (!weather.data) {
            return null;
          }
          const data = weather.data;
          return (
            <CityItem
              key={index}
              name={data.location.name}
              country={data.location.country}
              temperature={data.current.temp_c}
              text={data.current.condition.text}
              icon={data.current.condition.icon}
            ></CityItem>
          );
        })}
      </CityList>
    </Wrapper>
  );
};
