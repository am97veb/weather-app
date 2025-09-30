  const localStorageKey = "favouriteCities";

  export const saveCitiesInLocalStorage = (cities: string[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(cities))
  }

  export const getCitiesFromLocalStorage = () => {
    const citiesFormLocalStorage = localStorage.getItem(localStorageKey);
    return citiesFormLocalStorage ? JSON.parse(citiesFormLocalStorage) : [];
  };