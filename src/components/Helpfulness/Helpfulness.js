import PropTypes from "prop-types";
import s from "./Helpfulness.module.css";

const Helpfulness = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
    </section>
  );
};

Helpfulness.propTypes = { title: PropTypes.string.isRequired };

export default Helpfulness;
