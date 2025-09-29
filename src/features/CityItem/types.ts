import { FetchDataProps } from "../../types";

export interface CityItemProps {
  key: number;
  isCurrent: boolean;
  data: FetchDataProps;
  onDelete: (id: number) => void;
}