import { FetchDataProps } from "../../types";

export interface CityItemProps {
  key: number;
  isForecast: boolean;
  data: FetchDataProps;
  onDelete: (id: number) => void;
}