import { dateToHour } from "../../utils/dataFormatter";
import { Tile } from "../Tile/index.";
import { showForecastFromCurrentHour } from "./showForecastFromCurrentHour";
import {
  CarouselButton,
  Hour,
  HourSlide,
  CarouselTrack,
  LeftArrow,
  HourlyCarouselWrapper,
  RightArrow,
} from "./styled";
import { mapHourlyForecast } from "./hourlyForecastMapper";
import { useCarouselScroll } from "./useCarouselScroll";
import { HourlyForecastCarouselProps } from "./types";

export const HourlyForecastCarousel = ({ data }: HourlyForecastCarouselProps) => {
  const hoursFromNow = showForecastFromCurrentHour(data);
  const { goToLeft, goToRight, carouselRef } = useCarouselScroll();

  return (
    <HourlyCarouselWrapper>
      <CarouselButton left onClick={goToLeft}>
        <LeftArrow></LeftArrow>
      </CarouselButton>
      <CarouselTrack ref={carouselRef}>
        {hoursFromNow?.map((hour) => (
          <>
            <HourSlide>
              <Hour>
                {hour.time === "now"
                  ? "now".toUpperCase()
                  : dateToHour(hour.time)}
              </Hour>
              <Tile data={mapHourlyForecast(hour)} mediumTile={true} />
            </HourSlide>
          </>
        ))}
      </CarouselTrack>
      <CarouselButton right onClick={goToRight}>
        <RightArrow></RightArrow>
      </CarouselButton>
    </HourlyCarouselWrapper>
  );
};
