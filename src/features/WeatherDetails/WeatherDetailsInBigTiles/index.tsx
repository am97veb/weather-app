import { Tile } from "../../Tile/index.";
import { Wrapper } from "./styled";
import { WeatherDetailsInBigTilesProps } from "./types";
import {
  mapSunAndMoonData,
  mapWindData,
} from "./weatherDetailsInBigTilesMapper";

export const WeatherDetailsInBigTiles = (
  data: WeatherDetailsInBigTilesProps
) => (
  <>
    <Tile
      title={"air quality"}
      data={data.current.air_quality}
      unit={" μg/m3"}
      gridArea="air"
    />
    <Wrapper>
      <Tile data={mapWindData(data)} unit={" m/s"} gridArea="wind" />
      <Tile
        title={"sun and moon"}
        data={mapSunAndMoonData(data)}
        unit={" %"}
        gridArea="sunAndMoon"
      />
    </Wrapper>
  </>
);
