import { AirQualityProps, ForecastAstro } from "../../types";

export interface TileProps {
    data: AirQualityProps | ForecastAstro;
    unit?: string;
    title: string;
}