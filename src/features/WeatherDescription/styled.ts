import styled, { css } from "styled-components";
import { StyledComponendsProps } from "../types";

export const Wrapper = styled.div<StyledComponendsProps>`
  display: flex;
  grid-area: weatherDescription;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-self: end;
  }

  ${({ forecastView }) =>
    forecastView &&
    css`
      margin-bottom: -6px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        margin-bottom: 0px;
      }
    `}
`;

export const Description = styled.p<StyledComponendsProps>`
  margin: 0 5px 0 5px;
  font-size: ${({ theme }) => theme.fonts.md}px;
  align-self: center;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.sm}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    order: 1;
    justify-self: flex-end;
  }

  ${({ forecastView }) =>
    forecastView &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        font-size: 2.5vw;
      }
      
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        display: none;
      }
    `}

  ${({ bigTile }) =>
    bigTile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        display: none;
      }
    `}
`;

export const Icon = styled.img<StyledComponendsProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 50px;
    order: 2;
  }

  ${({ forecastView }) =>
    forecastView &&
    css`
      align-self: center;
      width: 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        width: 46px;
      }
    `}
`;
