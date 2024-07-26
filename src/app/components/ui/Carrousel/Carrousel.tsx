"use client";
import { FC } from "react";
import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";

import "./Carrousel.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarrouselArrowButton";
import { DotButton, useDotButton } from "./CarrouselDotButton";

type PropType = {
  slides: any[];
  slideHeight?: string;
  controls: boolean;
  options?: EmblaOptionsType;
};

export const Carrousel: FC<PropType> = ({
  slides,
  slideHeight = "19rem",
  options,
  controls,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames(),
    Autoplay(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      className="embla"
      style={{ "--slide-height": slideHeight } as React.CSSProperties}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <Image
                className="embla__slide__img img-fluid"
                width={500}
                height={200}
                src={img.src}
                alt={img.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {controls && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
