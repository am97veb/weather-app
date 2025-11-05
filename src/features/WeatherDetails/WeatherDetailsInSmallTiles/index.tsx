import { Tile } from "../../Tile/index.";
import { propertyNameModifier } from "../propertyNameModifier";
import { mapWeatherDetailsInSmallTiles } from "./weatherDetailsInSmallTilesMapper";
import { SmallTilesWrapper } from "./styled";
import { WeatherDetailsInSmallTilesProps } from "./types";

export const WeatherDetailsInSmallTiles = (
  {currentWeather}: WeatherDetailsInSmallTilesProps
) => (
  <SmallTilesWrapper>
    {Object.entries(mapWeatherDetailsInSmallTiles({currentWeather})).map(
      ([property, value]) => (
        <Tile
          title={propertyNameModifier(property, property)}
          value={value}
          smallTile={true}
        />
      )
    )}
  </SmallTilesWrapper>
);
