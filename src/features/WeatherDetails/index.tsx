import { Wrapper, Description, Icon } from "./styled";
import { WeatherDetailsProps } from "./types";

export const WeatherDetails = ({
  icon,
  text,
  special,
}: WeatherDetailsProps) => (
  <Wrapper special={special}>
    <Icon src={`https:${icon}`} alt={text} special={special} />
    <Description special={special}>{text}</Description>
  </Wrapper>
);
