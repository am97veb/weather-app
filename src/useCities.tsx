import { useState } from "react";

export const useCities =()  => {
    const [cities, setCities] = useState<string[]>([]);

    const addCity = (city: string) => {
        if (!cities.includes(city.toLowerCase())) {
          setCities([...cities, city.toLowerCase()]);
        }
      };
    
      const deleteCity = (id: number) => {setCities([
        ...cities.slice(0, id),
        ...cities.slice(id + 1)
      ])};

      return {cities, addCity, deleteCity}
}