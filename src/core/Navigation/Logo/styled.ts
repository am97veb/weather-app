import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLogo = styled.img`
  width: 75px;
  height: 75px;
`;

export const AppTitle = styled.h1`
  text-transform: capitalize;
`;
