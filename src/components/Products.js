import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductTableNavButton from "./ProductsTableNavButton";

const ProductsInfo = [
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },

  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "3",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "4",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "5",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "6",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },

  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "3",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "4",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "5",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "6",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },

  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "3",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "4",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "5",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "6",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },

  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "3",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "4",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "5",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "6",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "1",
    isInStock: true,
  },
  {
    name: "Седельный тягач Shacman 6x6 SX4256DR385",
    wheels: "6x6",
    engineSize: "9 726 см",
    enigineType: "четырехтактный дизельный,с турбонаддувом",
    image: "2",
    isInStock: true,
  },
];

const Products = React.forwardRef(({}, ref) => {
  const productsPerPage = 7;
  const amountOfPages = Math.ceil(ProductsInfo.length / productsPerPage);
  const [productItems, setProductItems] = useState([]);
  const [currentPage, setСurrentPage] = useState(1);

  useEffect(() => {
    setProductItems(
      ProductsInfo.slice(currentPage - 1, currentPage - 1 + productsPerPage) // показывает определенное количество товаров в зависимости от страницы
    );
  }, [currentPage]);

  const generatePageNumbersArray = (from, to) => {
    const pageNumbersArray = [];
    for (let i = from; i <= to; i++) {
      pageNumbersArray.push(i);
    }
    return pageNumbersArray;
  };

  const generatePageNumbersButtons = () => {
    let NumberButtonsArray = [];
    if (amountOfPages > 4) {
      if (currentPage <= 3) {
        NumberButtonsArray = generatePageNumbersArray(1, 4);
      } else if (currentPage < amountOfPages - 1) {
        NumberButtonsArray = generatePageNumbersArray(
          currentPage - 1,
          currentPage + 1
        );
      } else {
        NumberButtonsArray = generatePageNumbersArray(
          amountOfPages - 2,
          amountOfPages
        );
      }
    } else {
      NumberButtonsArray = generatePageNumbersArray(1, amountOfPages);
    }
    return NumberButtonsArray;
  };

  return (
    <div id={"ProductsId"} ref={ref}>
      <section className="products">
        <div className="h2-and-main-text" data-aos="fade-up">
          <h2>Спецтехника и грузовые автомобили Shacman</h2>

          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений
          </p>
        </div>

        <div className="products__product-table">
          {productItems.map((product) => (
            <ProductCard
              key={productItems.indexOf(product)}
              name={product.name}
              wheels={product.wheels}
              engineSize={product.engineSize}
              enigineType={product.enigineType}
              image={product.image}
              isInStock={product.isInStock}
            />
          ))}
        </div>

        <div className="products__product-table__nav-btns">
          {currentPage > 3 && (
            <div
              onClick={() => setСurrentPage(1)}
              className="products__product-table__nav-btns__btn centered-element"
            >
              <img
                style={{ transform: "scale(-1, 1)" }}
                src="./images/nav-icons/slider-nav-arrow-gray.svg"
                alt="кнопка следующая страница"
              />
            </div>
          )}

          {/* если номер страницы больше 3 то показывать кнопку назад */}
          {generatePageNumbersButtons().map((number) => (
            <ProductTableNavButton
              key={generatePageNumbersButtons().indexOf(number)}
              number={number}
              currentPage={currentPage}
              setCurrentPage={setСurrentPage}
            />
          ))}

          <div
            onClick={() => setСurrentPage(amountOfPages)}
            className="products__product-table__nav-btns__btn centered-element"
          >
            <img
              src="./images/nav-icons/slider-nav-arrow-gray.svg"
              alt="кнопка следующая страница"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

export default Products;
