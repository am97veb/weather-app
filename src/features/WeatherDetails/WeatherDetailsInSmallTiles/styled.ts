import styled from "styled-components";

export const SmallTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10px;
  grid-area: smallTiles;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-template-columns: 130px;
    align-self: end;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, 150px);
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
  }
`;