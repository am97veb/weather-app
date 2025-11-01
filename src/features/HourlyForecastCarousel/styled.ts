import styled, { css } from "styled-components";
import Arrow from "../../assets/arrow.svg?react";
import { StyledComponendsProps } from "../types";

export const HourlyCarouselWrapper = styled.div`
  position: relative;
  z-index: 1;
  align-self: end;
  grid-area: hourlyForecast;
`;

export const CarouselTrack = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  border-radius: 10px;
  margin: 0;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HourSlide = styled.li`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  margin: 0;
  scroll-snap-align: start;
  flex-shrink: 0;

  &:last-of-type {
    gap: 0;
  }
`;

export const Hour = styled.div`
  flex-shrink: 0;
  text-align: center;
  margin-bottom: 5px;
`;

export const CarouselButton = styled.button<StyledComponendsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 140px;
  z-index: 2;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  padding: 0;

  ${({ left }) =>
    left &&
    css`
      left: -12px;
    `}

  ${({ right }) =>
    right &&
    css`
      right: -12px;
    `}
`;

export const LeftArrow = styled(Arrow)``;

export const RightArrow = styled(LeftArrow)`
  rotate: 0.5turn;
`;
