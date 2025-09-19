import styled from "styled-components";

export const StyledPlace = styled.div`
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
