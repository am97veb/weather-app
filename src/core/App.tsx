import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toCurrentWeather } from "./routes";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path={toCurrentWeather()} />
      <Route path="/" element={<Navigate to={toCurrentWeather()} />} />
    </Routes>
  </HashRouter>
);

export default App;
