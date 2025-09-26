import { useQueries } from "@tanstack/react-query";
import { fetchApiData } from "./fetchApiData";

export const useCitiesWeather = (
  cities: string[],
  endpoint: "current.json" | "forecast.json" | "search.json",
) => {
  return useQueries({
    queries: cities?.map((city) => ({
      queryKey: ["weather", city, endpoint],
      queryFn: () => fetchApiData(city, endpoint),
      enabled: !!city && city.trim() !== "",
    })),
  });
};
