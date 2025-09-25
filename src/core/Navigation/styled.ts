import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  max-width: 1500px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  background: ${({ theme }) => theme.colors.white};;
  border-radius: 0 0 10px 10px;
  padding: 10px 60px 10px 20px;
  box-shadow: -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0px;
  font-size: ${({ theme }) => theme.fonts.xl}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    text-align: right;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    text-align: center;
    margin: 15px 0 5px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.lg}px;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.starDust};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.fonts.md}px;
  }
`;
