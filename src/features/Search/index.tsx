import { FormEventHandler, useState } from "react";
import {
  AddCityButton,
  SuggestedCitiesList,
  SuggestedCity,
  Form,
  Input,
} from "./styled";
import { AddCityProps } from "./types";
import { useCitiesWeather } from "../../useCitiesWeather";
import { weatherEndpoints } from "../../weatherEndpoints";

export const Search = ({ addCity }: AddCityProps) => {
  const [searchedCity, setNewCity] = useState("");

  const searchSuggestions = useCitiesWeather(
    searchedCity.split(", "),
    weatherEndpoints.SEARCH
  );

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        value={searchedCity}
        onChange={(event) => setNewCity(event?.target.value)}
        placeholder="Search for a city"
      />
      {searchSuggestions.map((searchSuggestion) => {
        const data = searchSuggestion.data;
        if (!data) {
          return null;
        }
        if (!Array.isArray(data)) {
          return null;
        }

        const isThisCity = data.some(
          (city) => city.name.toLowerCase() === searchedCity
        );

        return (
          <>
            <SuggestedCitiesList>
              {data.map((city) => (
                <SuggestedCity
                  onClick={() => {
                    addCity(city.name);
                    setNewCity("");
                  }}
                  key={city.id}
                >
                  {city.name}
                </SuggestedCity>
              ))}
            </SuggestedCitiesList>
            <AddCityButton
              type="button"
              onClick={() =>
                isThisCity && (addCity(searchedCity), setNewCity(""))
              }
            >
              add city
            </AddCityButton>
          </>
        );
      })}
    </Form>
  );
};
