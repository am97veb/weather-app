import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toCurrentWeather } from "./routes";
import { CurrentWeather } from "../features/currentWeather";
import { Navigation } from "./Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path={toCurrentWeather()} element={<CurrentWeather />} />
      <Route path="/" element={<Navigate to={toCurrentWeather()} />} />
    </Routes>
  </HashRouter>
);

export default App;
