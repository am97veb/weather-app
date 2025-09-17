import axios from "axios";
import { sourceApi } from "./sourceApi";
import { CityDataProps } from "./types";

export const fetchApiData = async (city: string) => {
    const response = await axios.get<CityDataProps>(sourceApi(city));
    return response.data;
    
};