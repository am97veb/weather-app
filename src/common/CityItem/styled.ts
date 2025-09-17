import styled from "styled-components";

export const StyledCityItem = styled.li`
  list-style: none;
  display: grid;
  gap: 20px;
  width: auto;
  height: auto;
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
  border-radius: 10px;
  margin: 0;
  padding: 25px 25px 10px;
  transition: transform 0.5s;
  grid-template-areas:
    "place place"
    "temperature details";

  box-shadow: 0px -5px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};

  &:hover {
    transform: scale(1.02);
  }
`;

export const Place = styled.div`
  grid-area: place;
`;

export const City = styled.h2`
  margin: 0px;
  font-size: ${({ theme }) => theme.fonts.xxl}px;
  grid-area: city;
`;

export const Country = styled.p`
  margin: 0;
  align-self: center;
  grid-area: country;
`;
export const Temperature = styled.p`
  margin: 0 15px 0 0;
  font-size: ${({ theme }) => theme.fonts.huge}px;
  grid-area: temperature;
  justify-self: start;
  align-self: start;
`;

export const WeatherDetails = styled.div`
  grid-area: details;
  display: flex;
  justify-content: flex-end;
`;

export const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.lg}px;
  grid-area: description;
  align-self: center;
`;
export const Icon = styled.img`
  grid-area: icon;
  align-self: end;
  justify-self: center;
`;
