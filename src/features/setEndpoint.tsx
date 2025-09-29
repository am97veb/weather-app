import { useLocation } from "react-router-dom";
import { weatherEndpoints } from "../weatherEndpoints";

export const setEndpoint = () => {
    const { pathname } = useLocation();

    const endpoint =
        pathname === "/currentWeather"
          ? weatherEndpoints.CURRENT
          : weatherEndpoints.FORECAST;

          return endpoint
}