import styled, { css } from "styled-components";
import { StyledComponendsProps } from "../types";
import background from "../../assets/sky.jpg";
import { Link } from "react-router-dom";

export const StyledCityItem = styled.li<StyledComponendsProps>`
  position: relative;
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
    padding: 20px 15px 0;
    width: 100%;
    display: grid;
    gap: 0;
    grid-template-areas:
      "place temperature"
      "details weatherDescription";
  }

  ${({ special }) =>
    special &&
    css`
      max-width: 1500px;
      background-size: cover;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        display: flex;
        background-size: auto 572px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding: 15px 15px 10px;
      }
    `}
`;

export const StyledLink = styled(Link)`
 display: contents;
 color: inherit;
 width: 100%;
`;

export const RemoveCityButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-end;
  position: absolute;
  top: 10px;
  right: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    top: 4px;
    right: 0px;
  }
`;
