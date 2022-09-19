import React from "react";
const HeroPageSlide = React.forwardRef(({ title }, ref) => {
  return (
    <div className="slider-wrapper__slide" ref={ref}>
      <h1 className="hero-page-h1">{title}</h1>
    </div>
  );
});

export default HeroPageSlide;
