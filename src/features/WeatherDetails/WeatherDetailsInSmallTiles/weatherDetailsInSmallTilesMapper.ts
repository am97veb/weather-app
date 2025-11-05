import { WeatherDetailsInSmallTilesProps } from "./types";
import { uvIndexToText } from "./uvIndexToText";

export const mapWeatherDetailsInSmallTiles = ({currentWeather}: WeatherDetailsInSmallTilesProps ) => ({
  "feels like": `${currentWeather.feelslike_c} °C`,
  "pressure": `${currentWeather.pressure_mb} hPa`,
  "visibility": `${currentWeather.vis_km} km`,
  "humidity": `${currentWeather.humidity}%`,
  "dew point": `${currentWeather.dewpoint_c} °C`,
  "uv index": `${currentWeather.uv.toFixed(0)} - ${uvIndexToText(
    currentWeather.uv
  )}`,
});
