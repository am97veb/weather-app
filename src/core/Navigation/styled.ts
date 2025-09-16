import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  background: white;
  border-radius: 0 0 10px 10px;
  padding: 10px 60px 10px 10px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0px;
  font-size: ${({ theme }) => theme.fonts.big}px;
`;

export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
