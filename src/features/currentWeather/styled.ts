import styled from "styled-components";

export const Wrapper =  styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding-top: 50px;
`;

export const CityList = styled.ul`
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap:25px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
       gap: 10px;
    }
`;