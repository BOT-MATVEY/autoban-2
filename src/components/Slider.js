import React from "react";
import SliderCard from "./SliderCard";

const slidesInfo = [
  { id: 1, image: "1", text: "Сидельные тягачи SHACMAN" },
  { id: 2, image: "2", text: "Сидельные тягачи SHACMAN" },
  { id: 3, image: "3", text: "Сидельные тягачи SHACMAN" },
  { id: 4, image: "4", text: "Сидельные тягачи SHACMAN" },
  { id: 5, image: "5", text: "Сидельные тягачи SHACMAN" },
];

function Slider({ id }) {
  const sliderContainer = React.createRef();
  const slideRef = React.createRef();

  const getMaxScroll = () => {
    return (
      slideRef.current.offsetWidth * (slidesInfo.length - 3) +
      20 * (slidesInfo.length - 4)
    );
  };

  const getScrolllength = () => {
    return slideRef.current.offsetWidth + 20;
  };

  let currentScrollAmount = 0;

  const scrollSlide = () => {
    sliderContainer.current.scrollTo({
      left: currentScrollAmount,
      behavior: "smooth",
    });
  };

  const onClickNext = () => {
    // Проверить в границах ли слайдов скролл, если нет => вернуться к первому слайду
    if (currentScrollAmount >= getMaxScroll()) {
      currentScrollAmount = 0;
    } else {
      currentScrollAmount += getScrolllength();
    }

    scrollSlide();
  };

  const onClickPrev = () => {
    if (currentScrollAmount - getScrolllength() < 0) {
      currentScrollAmount = 0;
    } else {
      currentScrollAmount -= getScrolllength();
    }

    scrollSlide();
  };

  return (
    <div id={id}>
      <section className="slider">
        <div ref={sliderContainer} className="slider__cards">
          {slidesInfo.map((slide) => (
            <SliderCard
              ref={slideRef}
              key={slidesInfo.indexOf(slide)}
              slideOrder={slidesInfo.indexOf(slide)}
              slideText={slide.text}
              slideImage={slide.image}
            />
          ))}

          <div
            onClick={onClickPrev}
            className="slider__btn reflected-element centered-element"
          >
            <img src="./images/nav-icons/slider-nav-arrow-gray.svg" alt="" />
          </div>

          <div onClick={onClickNext} className="slider__btn centered-element">
            <img src="./images/nav-icons/slider-nav-arrow-gray.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
