import axios from "axios";
import { FetchDataProps } from "./types";
import { API_KEY, API_URL } from "./apiElements";

const weatherApi = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

export const fetchApiData = async (city: string, endpoint: string) => {
  const response = await weatherApi.get<FetchDataProps>(endpoint, {
    params: { 
        q: city,
        days: "3",
    },
  });
  return response.data;
};