import { dateToCompare } from "../../utils/dataFormatter";
import { WeatherForecast } from "../../types";

export const showForecastFromCurrentHour = (data: WeatherForecast) => {
  if (Array.isArray(data)) return [];

  if (data.forecastday !== undefined) {
    const allHours = [
      ...data.forecastday[0].hour,
      ...data.forecastday[1].hour,
      ...data.forecastday[2].hour,
    ];

    const dateNow = new Date();

    const filterHours = allHours.filter(
      ({ time }) => dateToCompare(time) >= dateToCompare(dateNow)
    );

    const hoursFromNow = [
      {
        ...filterHours[0],
        time: "now",
      },
      ...filterHours.slice(0),
    ];

    return hoursFromNow;
  }
};
