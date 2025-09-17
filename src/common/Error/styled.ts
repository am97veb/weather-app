import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 120px;
`;

export const Message = styled.p`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 36px;
`;