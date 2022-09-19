function ProductCard({
  name,
  wheels,
  engineSize,
  enigineType,
  image,
  isInStock,
}) {
  return (
    <div className="products__product-table__product-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(./images/trucks/${image}.png)` }}
      ></div>
      <div className="h4 products__product-table__product-card__card-name">
        {name}
      </div>
      <div className="products__product-table__product-card__card-info">
        <div>Колесная формула</div> <div>{wheels}</div>
        <div>Рабочий объем</div>
        <div>
          {engineSize} <sup>3</sup>
        </div>
        <div>Тип двигателя</div>
        <div>{enigineType}</div>
      </div>
      <button className="btn-gray nav-text">подробнее</button>

      <div className="in-the-stock-icon centered-element">
        <span>{isInStock ? "В наличии" : "Нет в наличии"}</span>
      </div>
    </div>
  );
}

export default ProductCard;
