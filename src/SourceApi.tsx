import { API_KEY, API_URL } from "./apiElements";

export const sourceApi = (city: string, endpoint: string) => `${API_URL}${endpoint}?key=${API_KEY}&q=${city}`;