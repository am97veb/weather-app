import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toCurrentWeather } from "./routes";
import { Navigation } from "./Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path={toCurrentWeather()} />
      <Route path="/" element={<Navigate to={toCurrentWeather()} />} />
    </Routes>
  </HashRouter>
);

export default App;
