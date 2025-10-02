import styled from "styled-components";

export const CurrentTemperature = styled.p`
  grid-area: temperature;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.huge}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.xxxl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.fonts.xxl}px;
    justify-self: end;
  }
`;
