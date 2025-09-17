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

export const SpinnerWrapper = styled.div`
  width: 91px;
  height: 91px;
  margin: 0 auto;
  animation: spin 1.5s linear infinite;
  transform-origin: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
