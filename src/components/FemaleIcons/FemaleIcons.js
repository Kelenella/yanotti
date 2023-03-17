import PropTypes from "prop-types";
import antiAge from "../../img/anti-age.jpg";
import beauty from "../../img/beauty-treatment.jpg";
import skinCare from "../../img/skincare.jpg";
import s from "./FemaleIcons.module.css";

const FemaleIcons = ({
  title,
  textObj: { cardTextBeauty, cardTextAntiAge, cardTextSkinCare },
}) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.cardsWrapper}>
        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={beauty} alt="beauty" />
            <p className={s.cardText}>{cardTextBeauty}</p>
          </div>
        </li>

        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={antiAge} alt="antiAge" />
            <p className={s.cardText}>{cardTextAntiAge}</p>
          </div>
        </li>

        <li className={s.cardsItem}>
          <div className={s.imgTxtWrap}>
            <img src={skinCare} alt="skinCare" />
            <p className={s.cardText}>{cardTextSkinCare}</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

FemaleIcons.defaultProps = {
  title: "для каждой девушки важно",
  textObj: {
    cardTextBeauty: "Выработать привычку ухаживать за собой",
    cardTextAntiAge: "Сохранить молодость без инъекций и уколов",
    cardTextSkinCare: "Учитывать состояние и потребности кожи",
  },
};

FemaleIcons.propTypes = {
  title: PropTypes.string,
  textObj: PropTypes.shape({
    cardTextBeauty: PropTypes.string,
    cardTextAntiAge: PropTypes.string,
    cardTextSkinCare: PropTypes.string,
  }),
};

export default FemaleIcons;
