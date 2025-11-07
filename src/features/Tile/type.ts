import { FetchDataProps } from "../../types";

export interface TileProps {
  data?: FetchDataProps | MappedData;
  unit?: string;
  title?: string;
  value?: string | number;
  smallTile?: boolean;
  mediumTile?: boolean;
  gridArea?: string;
}

export type MappedData = Record<string, string | number>;