import s from "./Header.module.css";
import logo from "../../img/logo-yanotti.jpg";

export default function Header() {
  return (
    <>
      <a href="/" className={s.logo}>
        <img src={logo} alt="logo" width={150} />
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
          <li className={s.navigationItem}>
            <a href="/" className={s.navigationLink}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
