import { API_KEY, API_URL } from "./apiElements";

export const SourceApi = (city: string, pathname: string) => {

  if (pathname === "/currentWeather") {
    return `${API_URL}current.json?key=${API_KEY}&q=${city}&aqi=no`;
  }
  return `${API_URL}forecast.json?key=${API_KEY}&q=${city}&days=7`;
};
