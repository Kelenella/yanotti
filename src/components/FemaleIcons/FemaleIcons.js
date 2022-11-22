import PropTypes from "prop-types";
import Icons from "../Icons/Icons";
import s from "./FemaleIcons.module.css";

const FemaleIcons = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div className={s.cardsWrapper}>
        <div>
          <Icons name="beautyTreatment1" width={200} />
        </div>
        <div>
          <Icons name="antiAge1" width={200} />
        </div>
        <div>
          <Icons name="skinCare1" width={200} />
        </div>
      </div>
    </section>
  );
};

FemaleIcons.propTypes = { title: PropTypes.string.isRequired };

export default FemaleIcons;
