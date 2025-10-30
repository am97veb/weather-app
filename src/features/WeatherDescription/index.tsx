import { Wrapper, Description, Icon } from "./styled";
import { WeatherDescriptionProps } from "./types";

export const WeatherDescription = ({
  icon,
  text,
  forecastView,
  bigTile,
}: WeatherDescriptionProps) => (
  <Wrapper forecastView={forecastView}>
    <Icon src={`https:${icon}`} alt={text} forecastView={forecastView} />
    <Description forecastView={forecastView} bigTile={bigTile}>
      {text}
    </Description>
  </Wrapper>
);
