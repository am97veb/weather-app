import styled from "styled-components";
import background from "../../assets/sky.jpg";

export const WeatherDetailsWrapperBlur = styled.div`
  max-width: 1500px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto 10px;
  box-shadow: 0px -5px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    -5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    5px 0px 20px -10px ${({ theme }) => theme.colors.boxShadow},
    0px 5px 20px -10px ${({ theme }) => theme.colors.boxShadow};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${background});
    background-size: cover;
    background-position: left top;
    filter: blur(10px);
    transform: scale(1.9);
    z-index: 0;
  }
`;

export const WeatherDetailsWrapper = styled.div`
  max-width: 1500px;
  padding: 25px 25px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 25px 15px 10px;
  }
`;

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: space-between;
    gap: 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "smallTiles smallTiles bigTilesWrapper air"
    "hourlyForecast hourlyForecast bigTilesWrapper air";

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    gap: 20px;
    grid-template-areas:
      "smallTiles smallTiles bigTilesWrapper air"
      "hourlyForecast hourlyForecast bigTilesWrapper air";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-template-columns: 135px 1fr 1fr;
    grid-template-areas:
      "smallTiles hourlyForecast hourlyForecast"
      "smallTiles hourlyForecast hourlyForecast"
      "smallTiles bigTilesWrapper air";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    grid-template-areas:
      "smallTiles smallTiles"
      "hourlyForecast hourlyForecast"
      "bigTilesWrapper air";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 10px;
    grid-template-areas:
      "smallTiles smallTiles"
      "hourlyForecast hourlyForecast"
      "bigTilesWrapper bigTilesWrapper"
      "air air";
  }
`;
