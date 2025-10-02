import styled, { css } from "styled-components";
import { StyledComponendsProps } from "../types";

export const ForecastWrapper = styled.ul`
  text-align: right;
  padding-left: 0;
  width: 100%;
`;

export const MaximumMinimumTemperatureHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: " . . maximumShortcut minimumShortcut";
  margin: 0 100px 15px 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin: 0 30px 15px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 0;
  }
`;

export const Forecast = styled(MaximumMinimumTemperatureHeader)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "date weatherDetails maximumTemperature minimumTemperature";

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 0 0 10px;
  }
`;

export const Day = styled.p`
  font-weight: bold;
  margin: 0px;
  align-self: center;
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.xl}px;
  grid-area: date;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.fonts.md}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }
`;

export const ForecastTemperature = styled.div<StyledComponendsProps>`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.xl}px;
  align-self: center;
  grid-area: maximumTemperature;
  font-size: ${({ theme }) => theme.fonts.xxl}px;
  margin: 0 0 -4px 0;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.lg}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }

  ${({ minimumTemperature }) =>
    minimumTemperature &&
    css`
      grid-area: minimumTemperature;
    `}
`;

export const MaximumShortcut = styled.div`
  font-size: ${({ theme }) => theme.fonts.sm}px;
  align-self: end;
  grid-area: maximumShortcut;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }
`;

export const MinimumShortcut = styled(MaximumShortcut)`
  grid-area: minimumShortcut;
`;
