import styled, { css } from "styled-components";
import background from "../assets/sky.jpg";
import { StyledComponendsProps } from "./types";

export const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 20px;
  }
`;

export const CityList = styled.ul<StyledComponendsProps>`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 10px;
  }

  ${({ special }) =>
    special &&
    css`
      padding-left: 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
    `}
`;

export const StyledCityItem = styled.li<StyledComponendsProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 356px;
  min-width: 280px;
  flex: 1 1 auto;
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
    max-width: 550px;
    padding: 15px 15px 0;
    width: 100%;
    display: grid;
    gap: 0;
    grid-template-areas:
      "place temperature"
      "details details";
  }

  ${({ special }) =>
    special &&
    css`
      max-width: 1500px;
      background-size: cover;
      display: grid;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        display: flex;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding: 15px 15px 0;
      }
    `}
`;