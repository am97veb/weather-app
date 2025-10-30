import { propertyNameModifier } from "../propertyNameModifier";
import { checkKey } from "../airQualityValueToText";
import {
  Wrapper,
  Detail,
  DetailsList,
  Title,
  Value,
  SmallTileValue,
  Caption,
} from "./styled";
import { TileProps } from "./type";

export const Tile = ({
  data,
  unit,
  title,
  value,
  smallTile,
  mediumTile,
  gridArea,
}: TileProps) => {
  return (
    <Wrapper smallTile={smallTile} mediumTile={mediumTile} gridArea={gridArea}>
      <Title smallTile={smallTile} mediumTile={mediumTile}>
        {title}
      </Title>
      <SmallTileValue smallTile={smallTile}>{value}</SmallTileValue>
      <DetailsList smallTile={smallTile}>
        {data &&
          Object.entries(data).map(([property, value]) => {
            const modifiedValue = checkKey(property, value);
            return (
              <Detail>
                <Caption mediumTile={mediumTile}>
                  {title ? propertyNameModifier(property, title) : property}
                </Caption>
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
