import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px -5px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};
`;

export const Button = styled.button`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
  border: none;
  border-radius: 10px;
  padding: 10px;
  flex-shrink: 0;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.02);
  }
`;
