import { WeatherDetailsInSmallTilesProps } from "./types";
import { uvIndexToText } from "./uvIndexToText";

export const mapWeatherDetailsInSmallTiles = ({current}: WeatherDetailsInSmallTilesProps ) => ({
  "feels like": `${current.feelslike_c} °C`,
  "pressure": `${current.pressure_mb} hPa`,
  "visibility": `${current.vis_km} km`,
  "humidity": `${current.humidity}%`,
  "dew point": `${current.dewpoint_c} °C`,
  "uv index": `${current.uv.toFixed(0)} - ${uvIndexToText(
    current.uv
  )}`,
});
