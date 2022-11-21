import s from "./Header.module.css";
import logo from "../../img/logo.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" className={s.logo} />
      <nav className={s.navigation}>
        <ul className={s.navigationList}>
          <li className={s.navigationItem}>
            <a href="/" className={s.navigationLink}>
              Преимущества
            </a>
          </li>
          <li className={s.navigationItem}>
            <a href="/" className={s.navigationLink}>
              Программа
            </a>
          </li>
          <li className={s.navigationItem}>
            <a href="/" className={s.navigationLink}>
              Отзывы
            </a>
          </li>
          <li className={s.navigationItem}>
            <a href="/" className={s.navigationLink}>
              Вопросы
            </a>
          </li>
        </ul>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
            <a href="tel:+380993589253" className={s.contactsLink}>
              +380993589253
            </a>
          </li>
          {/* <li>
            <a href="https://instagram.com/yanotti_massage?igshid=YmMyMTA2M2Y=">
              <svg>
                <use></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg>
                <use></use>
              </svg>
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
