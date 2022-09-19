function Banner() {
  return (
    <div>
      <section className="banner" data-aos="fade-up">
        <div className="banner__info">
          <h2>Доставка вашей спецтехники по всей россии</h2>
          <div className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений
          </div>
          <button className="btn-gray nav-text centered-element">
            <span>подробнее</span>
          </button>
        </div>

        <div className="banner__images">
          <img
            className="banner__images__man-and-truck"
            src="./images/photoes/banner-man-and-truck.png"
            alt="Мужчина и Автомобиль"
          />
        </div>

        <div className="banner__bg" />
      </section>
    </div>
  );
}

export default Banner;
