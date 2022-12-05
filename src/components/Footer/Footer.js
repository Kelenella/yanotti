// import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import s from "./Footer.module.css";
// import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.mainWrapper}>
        <div className={s.logoWrapper}>
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
          </nav>
        </div>

        <ul className={s.textList}>
          <li className={s.textItem}>
            <a href="/" src="Договор оферты" className={s.textLink}>
              Договор оферты
            </a>
          </li>
          <li className={s.textItem}>
            <a
              href="/"
              src="Политика конфиденциальности"
              className={s.textLink}
            >
              Политика конфиденциальности
            </a>
          </li>
        </ul>

        <div className={s.contactsWrapper}>
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
                yanotti_massage
              </a>
            </li>
            <li className={s.contactsItem}>
              <a
                href="/"
                aria-label="YanottiOnYoutube"
                className={s.contactsLink}
              >
                yanotti_massage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
