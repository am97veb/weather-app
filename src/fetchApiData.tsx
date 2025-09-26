import axios from "axios";
import { sourceApi } from "./sourceApi";
import { FetchDataProps } from "./types";

export const fetchApiData = async (city: string, endpoint: string) => {
    const response = await axios.get<FetchDataProps>(sourceApi(city, endpoint));
    return response.data; 
};