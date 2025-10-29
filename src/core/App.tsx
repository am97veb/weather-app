import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toCurrentWeather, toWeatherDetails, toWeatherForecast } from "./routes";
import { Weather } from "../features/index";
import { Navigation } from "./Navigation";
import { WeatherDetails } from "../features/WeatherDetails";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path={toCurrentWeather()} element={<Weather />} />
      <Route path={toWeatherForecast()} element={<Weather />} />
      <Route path={toWeatherDetails()} element={<WeatherDetails />} />
      <Route path="/" element={<Navigate to={toCurrentWeather()} />} />
    </Routes>
  </HashRouter>
);

export default App;
