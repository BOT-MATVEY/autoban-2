function ProductTableNavButton({ number, currentPage, setCurrentPage }) {
  const onButtonClick = () => {
    setCurrentPage(number);
  };

  return (
    <div
      onClick={onButtonClick}
      className={`products__product-table__nav-btns__btn ${
        number === currentPage && "active"
      }  centered-element`}
    >
      <span>{number}</span>
    </div>
  );
}

export default ProductTableNavButton;
