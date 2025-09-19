import axios from "axios";
import { SourceApi } from "./SourceApi";
import { CityDataProps } from "./types";

export const fetchApiData = async (city: string, pathname: string) => {
    const response = await axios.get<CityDataProps>(SourceApi(city, pathname));
    return response.data; 
};