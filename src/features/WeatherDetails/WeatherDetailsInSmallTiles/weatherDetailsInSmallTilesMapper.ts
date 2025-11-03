import { WeatherDetailsInSmallTilesProps } from "./types";
import { uvIndexToText } from "./uvIndexToText";

export const mapWeatherDetailsInSmallTiles = ({data}: WeatherDetailsInSmallTilesProps ) => ({
  "feels like": `${data.feelslike_c} °C`,
  "pressure": `${data.pressure_mb} hPa`,
  "visibility": `${data.vis_km} km`,
  "humidity": `${data.humidity}%`,
  "dew point": `${data.dewpoint_c} °C`,
  "uv index": `${data.uv.toFixed(0)} - ${uvIndexToText(
    data.uv
  )}`,
});
