import { AppTitle, StyledLogo, StyledLink } from "./styled";
import weatherAppLogo from "../../../assets/weatherAppLogo.png";
import { toCurrentWeather } from "../../routes";

export const Logo = () => (
  <StyledLink to={toCurrentWeather()}>
    <StyledLogo src={weatherAppLogo} alt="logo" />
    <AppTitle>weatherApp</AppTitle>
  </StyledLink>
);
