import React from "react";

const heroPageSlidesInfo = [
  {
    title: "Официальный сервисный центр shacman в г. Иркутск",
    imageURL: "",
    id: 1,
  },
  {
    title: "Официальный диллер SHACMAN",
    uspList: ["listItem1", "listItem2", "listItem3"],
  },

  {
    title: "Официальный сервисный центр shacman в г. Ноябрьск",
    uspList: ["listItem1", "listItem2", "listItem3"],
    id: 3,
  },
];

function HeroPage({ toggleModelCall }) {
  const sliderContainer = React.createRef();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const sliderTitleWrapper = React.createRef();
  let slideTexts;

  React.useEffect(() => {
    slideTexts = document.querySelectorAll(".hero-page-h1__text");

    sliderTitleWrapper.current.style.minHeight =
      slideTexts[currentSlide - 1].offsetHeight + "px"; // задает высоту контейнера в котором лежат тайтлы главной страницы

    slideTexts[currentSlide - 1].classList.add("currentSlide"); // меняет текст когда весь дом подгрузился
  }, [currentSlide]);

  const switchCurrentSlide = (isForwardDirection) => {
    if (isForwardDirection) {
      if (currentSlide !== slideTexts.length) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(1);
      }
    } else if (!isForwardDirection) {
      if (currentSlide !== 1) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(3);
      }
    }
    slideTexts.forEach((element) => element.classList.remove("currentSlide"));
  };

  const onClickNext = () => {
    switchCurrentSlide(true);
  };

  const onClickPrev = () => {
    switchCurrentSlide(false);
  };
  return (
    <div>
      <section className="hero-page">
        <svg
          className={"hero-page__pagination currentSlide" + currentSlide}
          width="138"
          height="116"
          viewBox="0 0 138 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4.37114e-08"
            y1="5.5"
            x2="127"
            y2="5.50001"
            stroke="#FFFF00"
          />
          <rect x="127" width="11" height="11" fill="#FFFF00" />
          <line
            x1="4.37114e-08"
            y1="40.4307"
            x2="127"
            y2="40.4307"
            stroke="#FFFF00"
          />
          <rect x="127" y="34.9307" width="11" height="11" fill="#FFFF00" />
          <line
            x1="4.37114e-08"
            y1="75.3613"
            x2="127"
            y2="75.3613"
            stroke="#FFFF00"
          />
          <rect x="127" y="69.8613" width="11" height="11" fill="#FFFF00" />
          <line
            x1="4.37114e-08"
            y1="110.292"
            x2="127"
            y2="110.292"
            stroke="#FFFF00"
          />
          <rect x="127" y="104.792" width="11" height="11" fill="#FFFF00" />
        </svg>

        <div className="content">
          {currentSlide === 1 && (
            <>
              <div
                className="hero-page__bg-image hero-page-prev-slide-image"
                style={{
                  backgroundImage: "url(./images/truck-in-nature3.jpg)",
                }}
              />
              <div
                className="hero-page__bg-image "
                style={{
                  backgroundImage: "url(./images/truck-in-nature.png)",
                }}
              />
            </>
          )}
          {currentSlide === 2 && (
            <>
              <div
                className="hero-page__bg-image hero-page-prev-slide-image"
                style={{
                  backgroundImage: "url(./images/truck-in-nature.png)",
                }}
              />

              <div
                className="hero-page__bg-image  "
                style={{
                  backgroundImage: "url(./images/truck-in-nature2.jpg)",
                }}
              />
            </>
          )}
          {currentSlide === 3 && (
            <>
              <div
                className="hero-page__bg-image  hero-page-prev-slide-image"
                style={{
                  backgroundImage: "url(./images/truck-in-nature2.jpg)",
                }}
              />

              <div
                className="hero-page__bg-image "
                style={{
                  backgroundImage: "url(./images/truck-in-nature3.jpg)",
                }}
              />
            </>
          )}

          <div className="hero-page__info">
            <div className="hero-page__h1-and-text">
              <div className="slider-wrapper" ref={sliderContainer}>
                <div
                  className="hero-page__title__wrapper hero-page-h1"
                  ref={sliderTitleWrapper}
                >
                  <div className="hero-page-h1__text currentSlide">
                    Авторизованный диллерский центр
                  </div>
                  <div className="hero-page-h1__text">
                    Официальный сервисный центр в г. Иркутск чтобы текст был
                    побольше
                  </div>
                  <div className="hero-page-h1__text">
                    Доставка Автомобилей по всей россии
                  </div>
                  {/* <HeroPageSlide
                    key={heroPageSlidesInfo.indexOf(slide)}
                    title={slide.title}
                    ref={slideRef}
                  /> */}
                </div>
              </div>
              <ul className="usp list-text">
                <li>
                  <span>Гарантия производителя</span>
                </li>
                <li>
                  <span>Сертифицированные специалисты</span>
                </li>
                <li>
                  <span>Только оригинальные запчасти</span>
                </li>
              </ul>
            </div>

            <div className="hero-page__buttons">
              <div className="horizontal-btns nav-text">
                <button
                  onClickCapture={toggleModelCall}
                  className="btn btn-dominant "
                >
                  Записаться
                </button>

                <button className="btn">Подробнее</button>
              </div>

              <div className="horizontal-btns hero-page__info__slider-btns">
                <div
                  onClick={onClickPrev}
                  className="slider-btn  centered-element"
                >
                  <img
                    className="reflected-element"
                    src="./images/nav-icons/slider-nav-arrow.svg"
                    alt="стрелка влево"
                  />
                </div>

                <div
                  onClick={onClickNext}
                  className="slider-btn  centered-element"
                >
                  <img
                    src="./images/nav-icons/slider-nav-arrow.svg"
                    alt="стрелка вправо"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-page__shacman-logo-container"
            style={{
              backgroundImage: "url(./images/nav-icons/shacman-big-logo.png)",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
