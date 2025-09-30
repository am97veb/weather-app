import { FetchDataProps } from "../../types";

export interface CityItemProps {
  id: number;
  isForecast: boolean;
  data: FetchDataProps;
  onDelete: (id: number) => void;
}