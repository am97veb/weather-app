export const SourceApi = (city: string, pathname: string) => {

  if (pathname === "/currentWeather") {
    return `https://api.weatherapi.com/v1/current.json?key=f6ac2ed9d3c8470794093950251609&q=${city}&aqi=no`;
  }
  return `https://api.weatherapi.com/v1/forecast.json?key=f6ac2ed9d3c8470794093950251609&q=${city}&days=7`;
};
