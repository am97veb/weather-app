import { useQueries } from "@tanstack/react-query";
import { fetchApiData } from "./fetchApiData";

export const useManyCitiesWeather = (cities: string[]) => {
  return useQueries({
    queries: cities.map((city) => ({
      queryKey: ["weather", city],
      queryFn: () => fetchApiData(city),
    })),
  });
};
