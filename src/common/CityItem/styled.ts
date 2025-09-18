import styled from "styled-components";
import background from "../../assets/sky.jpg";

export const StyledCityItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-image: url(${background});
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin: 0;
  padding: 25px 25px 10px;
  transition: transform 0.5s;
  box-shadow: 0px -5px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 15px 15px 0;
    display: grid;
    grid-template-areas:
      "place temperature"
      "details details";
  }
`;

export const Place = styled.div`
  align-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-area: place;
  }
`;

export const City = styled.h2`
  margin: 0px;
  font-size: ${({ theme }) => theme.fonts.xxl}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.xl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.lg}px;
  }
`;

export const Country = styled.p`
  margin: 0;
  align-self: center;
`;

export const Temperature = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.huge}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.xxxl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.xxl}px;
    grid-area: temperature;
    justify-self: end;
  }
`;

export const WeatherDetails = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-area: details;
    justify-self: end;
  }
`;

export const Description = styled.p`
  margin: 0 5px 0 0;
  font-size: ${({ theme }) => theme.fonts.md}px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    order: 1;
    justify-self: flex-end;
  }
`;

export const Icon = styled.img`

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 50px;
    order: 2;
  }
`;
