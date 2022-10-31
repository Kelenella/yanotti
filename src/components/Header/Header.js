import s from "./Header.module.css";

export default function Header() {
  return (
    <>
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
    </>
  );
}
