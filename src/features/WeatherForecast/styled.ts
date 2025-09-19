import styled from "styled-components";

export const ForecastWrapper = styled.ul`
  text-align: right;
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Forecast = styled.li`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Day = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fonts.md}px;
  grid-area: date;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.fonts.md}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
    align-self: end;
  }
`;

export const MinMaxTemp = styled.dl`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.xl}px;
  grid-area: temperature;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.lg}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }
`;

export const Shortcut = styled.dt`
  font-size: ${({ theme }) => theme.fonts.sm}px;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }
`;

export const ForecastTemperature = styled.dd`
  font-size: ${({ theme }) => theme.fonts.xxl}px;
  margin: 0 0 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.lg}px;
  }
`;
