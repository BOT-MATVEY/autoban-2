import React from "react";

const SliderCard = React.forwardRef(
  ({ slideText, slideImage, slideOrder }, ref) => {
    return (
      <div ref={ref} className="slider__cards__card">
        <div
          className="slider__cards__card__truck-photo"
          style={{ backgroundImage: `url(./images/trucks/${slideImage}.png)` }}
        ></div>
        <span className="h4">{slideText}</span>
      </div>
    );
  }
);

export default SliderCard;
