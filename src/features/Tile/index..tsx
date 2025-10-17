import { Caption } from "../Caption";
import { propertyNameModifier } from "../propertyNameModifier";
import { checkKey } from "../airQualityValueToText";
import { Wrapper, Detail, DetailsList, Title, Value } from "./styled";
import { TileProps } from "./type";

export const Tile = ({ data, unit, title }: TileProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <DetailsList>
        {Object.entries(data).map(([property, value]) => {
          const modifiedValue = checkKey(property, value);
          return (
            <Detail>
              <Caption>
                {propertyNameModifier(property, title)}:
              </Caption>{" "}
              <Value>
                {modifiedValue}
                {typeof modifiedValue === "string" && unit ? "" : unit}
              </Value>
            </Detail>
          );
        })}
      </DetailsList>
    </Wrapper>
  );
};
