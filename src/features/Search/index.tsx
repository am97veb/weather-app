import { FormEventHandler, useState } from "react";
import { Button, CityList, CityOption, Form, Input } from "./styled";

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
            <CityList>
              {!Array.isArray(data)
                ? null
                : data.map((city) => (
                      <CityOption
                        onClick={() => addCity(city.name)}
                        key={city.id}
                      >
                        {city.name}
                      </CityOption>
                    )
                  )}
            </CityList>
            <Button onClick={() => addCity(searchedCity)}>add city</Button>
          </>
        );
      })}
    </Form>
  );
};
