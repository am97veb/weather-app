import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin: 0;
  grid-area: bigTilesWrapper;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    gap: 10px;
  }
`;