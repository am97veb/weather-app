import styled, { css } from "styled-components";
import { StyledComponendsProps } from "../types";

export const Wrapper = styled.div<StyledComponendsProps>`
  border-radius: 10px;
  padding: 15px 15px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  backdrop-filter: blur(15px);
  grid-area: ${(props) => props.gridArea};

  ${({ mediumTile }) =>
    mediumTile &&
    css`
      margin: 0;
      padding: 5px 15px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding: 5px 10px;
      }
    `}

  ${({ smallTile }) =>
    smallTile &&
    css`
      padding: 15px 15px;
      margin: 0;
      width: 100%;
      max-height: 108px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding: 5px 10px;
      }
    `}
`;

export const DetailsList = styled.ul<StyledComponendsProps>`
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ smallTile }) =>
    smallTile &&
    css`
      display: none;
    `}
`;

export const Detail = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderWhite};
  padding: 12px 0 8px;
  white-space: pre-wrap;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 5px;
  }
`;

export const Value = styled.div`
  text-align: right;
  min-width: 50px;
`;

export const SmallTileValue = styled.div<StyledComponendsProps>`
  display: none;

  ${({ smallTile }) =>
    smallTile &&
    css`
      display: block;
      text-align: center;
      border-top: 1px solid ${({ theme }) => theme.colors.borderWhite};
      padding: 10px 0 8px;
    `}
`;

export const Title = styled.p<StyledComponendsProps>`
  text-transform: capitalize;
  margin: 0;
  font-weight: bold;

  ${({ smallTile }) =>
    smallTile &&
    css`
      text-align: center;
      margin: 10px 0 10px;
    `}

  ${({ mediumTile }) =>
    mediumTile &&
    css`
      display: none;
    `}
`;

export const Caption = styled.span<StyledComponendsProps>`
  justify-self: end;
  text-transform: capitalize;
  max-width: 120px;

  ${({ mediumTile }) =>
    mediumTile &&
    css`
      text-transform: none;
    `}
`;
