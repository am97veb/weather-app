import { Tile } from "../../Tile/index.";
import { propertyNameModifier } from "../propertyNameModifier";
import { mapWeatherDetailsInSmallTiles } from "./weatherDetailsInSmallTilesMapper";
import { SmallTilesWrapper } from "./styled";
import { WeatherDetailsInSmallTilesProps } from "./types";

export const WeatherDetailsInSmallTiles = ({ data }: WeatherDetailsInSmallTilesProps) => (
  <SmallTilesWrapper>
    {Object.entries(mapWeatherDetailsInSmallTiles({data})).map(
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
