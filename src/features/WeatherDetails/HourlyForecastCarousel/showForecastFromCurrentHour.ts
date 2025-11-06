import { dateToCompare } from "../../../utils/dataFormatter";
import { HourlyForecastCarouselProps } from "./types";

export const showForecastFromCurrentHour = ({
  forecastWeather,
}: HourlyForecastCarouselProps) => {
  if (Array.isArray(forecastWeather)) return [];

  if (forecastWeather.forecastday !== undefined) {
    const allHours = [
      ...forecastWeather.forecastday[0].hour,
      ...forecastWeather.forecastday[1].hour,
      ...forecastWeather.forecastday[2].hour,
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
