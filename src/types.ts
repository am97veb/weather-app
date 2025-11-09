export type FetchDataProps =
  | City[]
  | {
      location: {
        name: string;
        country: string;
      };
      forecast?: WeatherForecastProps;
      current: CurrentWeatherProps;
    };

export interface City {
  name: string;
  id: number;
}

export interface CurrentWeatherProps {
  temp_c: number;
  feelslike_c: number;
  pressure_mb: number;
  vis_km: number;
  humidity: number;
  uv: number;
  chance_of_rain: number;
  chance_of_snow: number;
  dewpoint_c: number;
  wind_kph: number;
  wind_dir: string;
  wind_degree: number;
  condition: ConditionProps;
  air_quality: AirQualityProps;
}

export interface ConditionProps {
  text: string;
  icon: string;
}

export interface AirQualityProps {
  [key: string]: number;
}

export interface WeatherForecastProps {
  forecastday: ForecastDayProps[];
}

export interface ForecastDayProps {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: ConditionProps;
  };
  hour: HourlyForecastProps[];
  astro: ForecastAstroProps;
}

export interface HourlyForecastProps {
  time: string;
  temp_c: number;
  humidity: number;
  pressure_mb: number;
  vis_km: number;
  chance_of_rain: number;
  chance_of_snow: number;
}

export interface ForecastAstroProps {
  moon_illumination: number;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}
