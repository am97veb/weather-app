import { CurrentWeather } from "../CurrentWeather";
import { Place } from "../Place";
import {
  CurrentWeatherWrapper,
  Wrapper,
  WeatherDetailsWrapper,
  WeatherDetailsWrapperBlur,
} from "./styled";
import { HourlyForecastCarousel } from "./HourlyForecastCarousel";
import { useParams } from "react-router-dom";
import { useCitiesWeather } from "../../useCitiesWeather";
import { setEndpoint } from "../setEndpoint";
import { WeatherDetailsInSmallTiles } from "./WeatherDetailsInSmallTiles";
import { WeatherDetailsInBigTiles } from "./WeatherDetailsInBigTiles";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const WeatherDetails = () => {
  const { name } = useParams<{ name: string }>();
  const endpoint = setEndpoint();
  const weatherInCity = useCitiesWeather(name ? [name] : [], endpoint);
  const cityData = weatherInCity[0];

  if (cityData.isLoading) {
      return <Loading />;
    }
  
    if (cityData.error) {
      return <Error />;
    }

  return (
    <>
      {weatherInCity.map((weather) => {
        if (!weather.data) {
          return null;
        }
        const data = weather.data;

        return (
          <WeatherDetailsWrapperBlur>
            <WeatherDetailsWrapper>
              {!Array.isArray(data) && (
                <>
                  <CurrentWeatherWrapper>
                    <Place
                      name={data.location.name}
                      country={data.location.country}
                    />
                    <CurrentWeather
                      temperature={data.current.temp_c}
                      text={data.current.condition.text}
                      icon={data.current.condition.icon}
                      bigTile={true}
                    />
                  </CurrentWeatherWrapper>
                  <Wrapper>
                    <WeatherDetailsInSmallTiles currentWeather={data.current} />
                    <WeatherDetailsInBigTiles
                      currentWeather={data.current}
                      forecastWeather={data.forecast!}
                    />
                    <HourlyForecastCarousel forecastWeather={data.forecast!} />
                  </Wrapper>
                </>
              )}
            </WeatherDetailsWrapper>
          </WeatherDetailsWrapperBlur>
        );
      })}
    </>
  );
};
