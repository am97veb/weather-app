import { Tile } from "../../Tile/index.";
import { Wrapper } from "./styled";
import { WeatherDetailsInBigTilesProps } from "./types";
import {
  mapSunAndMoonData,
  mapWindData,
} from "./weatherDetailsInBigTilesMapper";

export const WeatherDetailsInBigTiles = (
  {currentWeather, forecastWeather}: WeatherDetailsInBigTilesProps
) => (
  <>
    <Tile
      title={"air quality"}
      data={currentWeather.air_quality}
      unit={" μg/m3"}
      gridArea="air"
    />
    <Wrapper>
      <Tile data={mapWindData({currentWeather})} unit={" m/s"} gridArea="wind" />
      <Tile
        title={"sun and moon"}
        data={mapSunAndMoonData({forecastWeather})}
        unit={" %"}
        gridArea="sunAndMoon"
      />
    </Wrapper>
  </>
);
