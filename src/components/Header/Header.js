import s from "./Header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <a href="/" noopener="true" noreferrer="true" className={s.logo}>
          <img src={logo} alt="logo" width={88} height={80} />
        </a>
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
        </nav>
        <ul>
          <li>
            <a href="tel:+380993589253">+380993589253</a>
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
      </header>
    </>
  );
};

export default Header;
