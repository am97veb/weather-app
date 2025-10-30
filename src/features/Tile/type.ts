import { AirQualityProps, ForecastAstro } from "../../types";

export interface TileProps {
  data?: AirQualityProps | ForecastAstro;
  unit?: string;
  title?: string;
  value?: string | number;
  smallTile?: boolean;
  mediumTile?: boolean;
  gridArea?: string;
}
