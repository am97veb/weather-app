import { useQueries } from "@tanstack/react-query";
import { fetchApiData } from "./fetchApiData";

export const useManyCitiesWeather = (cities: string[], pathname:string) => {
 
  return useQueries({
    queries: cities.map((city) => ({
      queryKey: ["weather", city, pathname],
      queryFn: () => fetchApiData(city, pathname),
    })),
  });
};
