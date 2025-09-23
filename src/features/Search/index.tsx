import { FormEventHandler, useState } from "react";
import { Button, Form, Input } from "./styled";

export const Search = () => {
  const [city, setNewCity] = useState("");

  const onFormSubmit:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        value={city}
        onChange={({ target }) => setNewCity(target.value)}
        placeholder="Search for a city"
      ></Input>
      <Button>add city</Button>
    </Form>
  );
};
