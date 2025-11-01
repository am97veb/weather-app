import { HourlyForecast } from "../../types";

export const mapHourlyForecast = (data: HourlyForecast) => ({
    "🌡": `${data.temp_c} °C`,
    "rH": `${data.humidity}%`,
    "hPa": data.pressure_mb,
    "👁": `${data.vis_km} km`,
    "🌧": `${data.chance_of_rain}%`,
    "❄": `${data.chance_of_snow}%`,
  });