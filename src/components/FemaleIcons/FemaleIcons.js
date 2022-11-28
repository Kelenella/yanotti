import PropTypes from "prop-types";
import antiAge from "../../img/anti-age.jpg";
import beauty from "../../img/beauty-treatment.jpg";
import skinCare from "../../img/skincare.jpg";
import s from "./FemaleIcons.module.css";

const FemaleIcons = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.cardsWrapper}>
        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={beauty} alt="beauty" />
            <p className={s.cardText}>Выработать привычку ухаживать за собой</p>
          </div>
        </li>

        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={antiAge} alt="antiAge" />
            <p className={s.cardText}>
              Сохранить молодость без инъекций и уколов
            </p>
          </div>
        </li>

        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={skinCare} alt="skinCare" />
            <p className={s.cardText}>Учитывать состояние и потребности кожи</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

FemaleIcons.propTypes = { title: PropTypes.string.isRequired };

export default FemaleIcons;
