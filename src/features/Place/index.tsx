import { StyledPlace, City, Country } from "./styled";
import { PlaceProps } from "./types";

export const Place = ({ name, country }: PlaceProps) => (
  <StyledPlace>
    <City>{name}</City>
    <Country>{country}</Country>
  </StyledPlace>
);
