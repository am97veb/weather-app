export const toCurrentWeather = () => "/currentWeather";
export const toWeatherForecast = () => "/weatherForecast";
export const toWeatherDetails = ({name} = {name: ":name"}) => `/weatherDetails/${name}`;