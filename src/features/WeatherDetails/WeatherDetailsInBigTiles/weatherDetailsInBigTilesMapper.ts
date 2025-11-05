import { SunMoonMapperProps, WindMapperProps } from "./types";

export const mapWindData = ({currentWeather}: WindMapperProps) => ({
  wind: currentWeather.wind_kph,
  direction: `${currentWeather.wind_degree}° ${currentWeather.wind_dir}`,
});

export const mapSunAndMoonData = ({forecastWeather}: SunMoonMapperProps) => ({
  sunrise: forecastWeather.forecastday[0].astro.sunrise,
  sunset: forecastWeather.forecastday[0].astro.sunset,
  moonrise: forecastWeather.forecastday[0].astro.moonrise,
  moonset: forecastWeather.forecastday[0].astro.moonset,
  "moon phase": forecastWeather.forecastday[0].astro.moon_phase,
  "moon illumination": forecastWeather.forecastday[0].astro.moon_illumination,
});
