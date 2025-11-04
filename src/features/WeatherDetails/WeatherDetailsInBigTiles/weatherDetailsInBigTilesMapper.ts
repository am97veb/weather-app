import { WeatherDetailsInBigTilesProps } from "./types";

export const mapWindData = ({current}: WeatherDetailsInBigTilesProps) => ({
  wind: current.wind_kph,
  direction: `${current.wind_degree}° ${current.wind_dir}`,
});

export const mapSunAndMoonData = ({forecast}: WeatherDetailsInBigTilesProps) => ({
  sunrise: forecast.forecastday[0].astro.sunrise,
  sunset: forecast.forecastday[0].astro.sunset,
  moonrise: forecast.forecastday[0].astro.moonrise,
  moonset: forecast.forecastday[0].astro.moonset,
  "moon phase": forecast.forecastday[0].astro.moon_phase,
  "moon illumination": forecast.forecastday[0].astro.moon_illumination,
});
