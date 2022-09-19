function Reviews({ id }) {
  return (
    <div id={id}>
      <section className="reviews" data-aos="fade-up">
        <div className="h2-and-main-text">
          <h2>отзывы наших покупателей</h2>
          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском
          </p>
        </div>

        <div className="reviews__cards">
          <div className="reviews__cards__card">
            <header className="reviews__cards__card__header">
              <img
                className="reviews__cards__card__header__avatar"
                src="./images/review-avatars/1.png"
                alt="фото сотрудника"
              />

              <div className="reviews__cards__card__info">
                <p className="reviews__cards__card__header__info__client-name">
                  Александр Шумихин
                </p>
                <p className="reviews__cards__card__header__info__client-position">
                  Должность сотрудника компании
                </p>
              </div>
            </header>

            <div className="reviews__cards__card__review main-text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений на русском языке, а начинающему оратору
              отточить навык публичных{" "}
            </div>

            <button className="reviews__cards__card__show-more-btn main-text">
              Читать полностью{" "}
              <img
                src="./images/nav-icons/slider-nav-arrow-gray.svg"
                alt="стрелка вправо"
              />
            </button>
          </div>

          <div className="reviews__cards__card">
            <header className="reviews__cards__card__header">
              <img
                className="reviews__cards__card__header__avatar"
                src="./images/review-avatars/1.png"
                alt="фото сотрудника"
              />

              <div className="reviews__cards__card__info">
                <p className="reviews__cards__card__header__info__client-name">
                  Александр Шумихин
                </p>
                <p className="reviews__cards__card__header__info__client-position">
                  Должность сотрудника компании
                </p>
              </div>
            </header>

            <div className="reviews__cards__card__review main-text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений на русском языке, а начинающему оратору
              отточить навык публичных{" "}
            </div>

            <button className="reviews__cards__card__show-more-btn main-text">
              Читать полностью{" "}
              <img
                src="./images/nav-icons/slider-nav-arrow-gray.svg"
                alt="стрелка вправо"
              />
            </button>
          </div>

          <div className="reviews__cards__card">
            <header className="reviews__cards__card__header">
              <img
                className="reviews__cards__card__header__avatar"
                src="./images/review-avatars/1.png"
                alt="фото сотрудника"
              />

              <div className="reviews__cards__card__info">
                <p className="reviews__cards__card__header__info__client-name">
                  Александр Шумихин
                </p>
                <p className="reviews__cards__card__header__info__client-position">
                  Должность сотрудника компании
                </p>
              </div>
            </header>

            <div className="reviews__cards__card__review main-text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений на русском языке, а начинающему оратору
              отточить навык публичных{" "}
            </div>

            <button className="reviews__cards__card__show-more-btn main-text">
              Читать полностью{" "}
              <img
                src="./images/nav-icons/slider-nav-arrow-gray.svg"
                alt="стрелка вправо"
              />
            </button>
          </div>
        </div>

        <button className="reviews__show-all-reviews-btn nav-text">
          Смотреть все отзывы
        </button>
      </section>
    </div>
  );
}

export default Reviews;
