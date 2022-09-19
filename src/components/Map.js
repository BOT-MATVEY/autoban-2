function Map() {
  return (
    <div>
      <section className="map">
        <div className="map__container">
          <div className="map__info-card">
            <div className="map__info-card__title">
              Грузовой Сервис, продажа грузовой техники
            </div>
            <div className="map__info-card__key-text">
              <p className="map__info-card__key-text__key ">Адрес:</p>
              <p className="map__info-card__key-text__text ">
                Иркутская Область д. Малая Еланка ул. Пролетарская 1Б
              </p>
            </div>
            <div className="map__info-card__key-text">
              <p className="map__info-card__key-text__key ">Телефон:</p>
              <p className="map__info-card__key-text__text ">
                {" "}
                +7(3952)78-86-02
              </p>
            </div>
            <div className="map__info-card__key-text">
              <p className="map__info-card__key-text__key ">Режим Работы:</p>
              <p className="map__info-card__key-text__text ">
                Ежедневно 9:00 - 18:00 <br /> Выходные: суббота, воскресение
              </p>
            </div>
            <div className="map__info-card__key-text">
              <p className="map__info-card__key-text__key ">Почта:</p>
              <p className="map__info-card__key-text__text">
                info@autoban38.ru
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
