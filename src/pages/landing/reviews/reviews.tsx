"use client";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { KidLG } from "../../../assets/images";

const OPTIONS: EmblaOptionsType = { align: "center" };

export const ReviewsData = [
  {
    review:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    role: "Manager @ Howarts",
    img: KidLG,
  },
  {
    review:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    role: "Manager @ Slytherin",
    img: KidLG,
  },
  {
    review:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    name: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    img: KidLG,
  },
  {
    review:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    role: "Manager @ Howarts",
    img: KidLG,
  },
  {
    review:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    role: "Manager @ Slytherin",
    img: KidLG,
  },
  {
    review:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    name: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    img: KidLG,
  },
];
const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-5/6 container-px">
      <div className="container-w flex items-end mx-auto">
        <section className="embla">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ml-[-2rem] touch-pan-y touch-pinch-zoom backface-hidden">
              {ReviewsData.map((r, index) => (
                <div
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_33.33%] pl-[2rem]"
                  key={index}
                >
                  <img src={r.img} alt={r.name} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex items-center justify-end gap-1">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton
            color="red"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
