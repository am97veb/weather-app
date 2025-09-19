import styled, { css } from "styled-components";
import { StyledComponendsProps } from "../types";


export const CurrentTemperature = styled.p<StyledComponendsProps>`
  grid-area: temperature;
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

  ${({ special }) =>
    special &&
    css`
      font-size: small;
      display: none;
    `}
`;

export const WeatherDetails = styled.div<StyledComponendsProps>`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-area: details;
    justify-self: end;
  }

  ${({ special }) =>
    special &&
    css`
      display: none;
    `}
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