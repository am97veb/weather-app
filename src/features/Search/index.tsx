import { FormEventHandler, useState } from "react";
import { AddCityButton, SuggestedCitiesList, SuggestedCity, Form, Input } from "./styled";

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

        if (!searchSuggestion.data) {
          return null;
        }
        const data = searchSuggestion.data;
        return (
          <>
            <SuggestedCitiesList>
              {!Array.isArray(data)
                ? null
                : data.map((city) => (
                      <SuggestedCity
                        onClick={() => addCity(city.name)}
                        key={city.id}
                      >
                        {city.name}
                      </SuggestedCity>
                    )
                  )}
            </SuggestedCitiesList>
            <AddCityButton onClick={() => addCity(searchedCity)}>add city</AddCityButton>
          </>
        );
      })}
    </Form>
  );
};
