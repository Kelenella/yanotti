import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import s from "./Footer.module.css";
// import Icons from "../Icons/Icons";

const Footer = ({
  textLinksObj: { textHelpfulness, textProgram, textReviews, textQa },
  middleTxtObj: { contractOffer, privacyPolicy },
  contactsTxtObj: { phoneNumber, instaContact, youTubeContact },
}) => {
  return (
    <footer className={s.footer}>
      <div className={s.mainWrapper}>
        <div className={s.logoWrapper}>
          <img src={logo} alt="logo" className={s.logo} />
          <nav className={s.navigation}>
            <ul className={s.navigationList}>
              <li className={s.navigationItem}>
                <a href="#helpfulness" className={s.navigationLink}>
                  {textHelpfulness}
                </a>
              </li>
              <li className={s.navigationItem}>
                <a href="#program" className={s.navigationLink}>
                  {textProgram}
                </a>
              </li>
              <li className={s.navigationItem}>
                <a href="#reviews" className={s.navigationLink}>
                  {textReviews}
                </a>
              </li>
              <li className={s.navigationItem}>
                <a href="#qa" className={s.navigationLink}>
                  {textQa}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className={s.textList}>
          <li className={s.textItem}>
            <a href="/" src="contractOffer" className={s.textLink}>
              {contractOffer}
            </a>
          </li>
          <li className={s.textItem}>
            <a href="/" src="privacyPolicy" className={s.textLink}>
              {privacyPolicy}
            </a>
          </li>
        </ul>

        <div className={s.contactsWrapper}>
          <ul className={s.contactsList}>
            <li className={s.contactsItem}>
              <a href="tel:+380993589253" className={s.contactsLink}>
                {phoneNumber}
              </a>
            </li>
            <li className={s.contactsItem}>
              <a
                href="https://instagram.com/yanotti_massage?igshid=YmMyMTA2M2Y="
                aria-label="YanottiOnInstagram"
                className={s.contactsLink}
              >
                {instaContact}
              </a>
            </li>
            <li className={s.contactsItem}>
              <a
                href="/"
                aria-label="YanottiOnYoutube"
                className={s.contactsLink}
              >
                {youTubeContact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  textLinksObj: {
    textHelpfulness: "Преимущества",
    textProgram: "Программа",
    textReviews: "Отзывы",
    textQa: "Вопросы",
  },
  middleTxtObj: {
    contractOffer: "Договор оферты",
    privacyPolicy: "Политика конфиденциальности",
  },
  contactsTxtObj: {
    phoneNumber: "+380993589253",
    instaContact: " yanotti_massage",
    youTubeContact: " yanotti_massage",
  },
};

Footer.propTypes = {
  textLinksObj: PropTypes.shape({
    textHelpfulness: PropTypes.string,
    textProgram: PropTypes.string,
    textReviews: PropTypes.string,
    textQa: PropTypes.string,
  }),
  middleTxtObj: PropTypes.shape({
    contractOffer: PropTypes.string,
    privacyPolicy: PropTypes.string,
  }),
  contactsTxtObj: PropTypes.shape({
    instaContact: PropTypes.string,
    youTubeContact: PropTypes.string,
  }),
};

export default Footer;
