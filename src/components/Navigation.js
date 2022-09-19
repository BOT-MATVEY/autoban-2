function Navigation({ toggleMenu }) {
  return (
    <ul className="navigation nav-text">
      <li>
        <a onClick={toggleMenu} href="#ProductsId">
          КАТАЛОГ
        </a>
      </li>
      <li>
        <a onClick={toggleMenu} href="#LisingId">
          ЛИЗИНГ
        </a>
      </li>
      <li>
        <a onClick={toggleMenu} href="#AboutCompanyId">
          О КОМПАНИИ
        </a>
      </li>
      <li>
        <a onClick={toggleMenu} href="#CarServiceId">
          АВТОСЕРВИС
        </a>
      </li>
      <li>
        <a onClick={toggleMenu} href="#ContactsId">
          КОНТАКТЫ
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
