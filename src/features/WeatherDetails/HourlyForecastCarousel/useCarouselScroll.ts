import { useRef } from "react";

export const useCarouselScroll = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollAmount = 260;

  const goToRight = () => {
    carouselRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const goToLeft = () => {
    carouselRef.current?.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  return { goToLeft, goToRight, carouselRef };
};
