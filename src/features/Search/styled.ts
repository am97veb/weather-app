import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 15px;
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  border: none;
  z-index: 3;
  box-shadow: 0px -5px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};

  &:focus {
    outline: none;
  }
`;

export const AddCityButton = styled.button`
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

export const SuggestedCitiesList = styled.ul`
  right: 98px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 30px;
  z-index: 2;
  padding: 10px;
  list-style: none;
  border-radius: 10px;
  border: none;
  box-shadow: -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};
`;

export const SuggestedCity = styled.li`
  width: 100%;
  padding: 5px;
  cursor: pointer;
`;