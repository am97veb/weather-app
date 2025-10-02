import { Wrapper, Description, Icon } from "./styled";
import { WeatherDescriptionProps } from "./types";

export const WeatherDescription = ({
  icon,
  text,
  special,
}: WeatherDescriptionProps) => (
  <Wrapper special={special}>
    <Icon src={`https:${icon}`} alt={text} special={special} />
    <Description special={special}>{text}</Description>
  </Wrapper>
);
