import { useEffect, useState } from "react";
import {
  getCitiesFromLocalStorage,
  saveCitiesInLocalStorage,
} from "./localStorage";

export const useCities = () => {
  const [cities, setCities] = useState<string[]>(getCitiesFromLocalStorage);

  useEffect(() => {
    saveCitiesInLocalStorage(cities);
  }, [cities]);

  const addCity = (city: string) => {
    if (!cities.includes(city.toLowerCase())) {
      setCities([...cities, city.toLowerCase()]);
    }
  };

  const deleteCity = (id: number) => {
    setCities([...cities.slice(0, id), ...cities.slice(id + 1)]);
  };

  return { cities, addCity, deleteCity };
};
