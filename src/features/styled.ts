import styled, { css } from "styled-components";
import { StyledComponendsProps } from "./types";

export const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const CityList = styled.ul<StyledComponendsProps>`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 10px;
  }

  ${({ forecastView }) =>
    forecastView &&
    css`
      padding-left: 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
    `}
`;
