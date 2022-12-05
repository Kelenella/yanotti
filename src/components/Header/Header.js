// import PropTypes from "prop-types";
import s from "./Header.module.css";
import logo from "../../img/logo.png";
import Icons from "../Icons/Icons";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <img src={logo} alt="logo" className={s.logo} />
        <nav className={s.navigation}>
          <ul className={s.navigationList}>
            <li className={s.navigationItem}>
              <a href="#helpfulness" className={s.navigationLink}>
                Преимущества
              </a>
            </li>
            <li className={s.navigationItem}>
              <a href="#program" className={s.navigationLink}>
                Программа
              </a>
            </li>
            <li className={s.navigationItem}>
              <a href="#reviews" className={s.navigationLink}>
                Отзывы
              </a>
            </li>
            <li className={s.navigationItem}>
              <a href="#qa" className={s.navigationLink}>
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
            <li className={s.contactsItem}>
              <a
                href="https://instagram.com/yanotti_massage?igshid=YmMyMTA2M2Y="
                aria-label="YanottiOnInstagram"
                className={s.contactsLink}
              >
                <Icons name="instagram" width={30} height={30} />
              </a>
            </li>
            <li className={s.contactsItem}>
              <a
                href="/"
                aria-label="YanottiOnYoutube"
                className={s.contactsLink}
              >
                <Icons name="youtube" width={30} height={30} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
