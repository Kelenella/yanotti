import PropTypes from "prop-types";
import s from "./Q&a.module.css";

const Qa = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
    </section>
  );
};

Qa.propTypes = { title: PropTypes.string.isRequired };

export default Qa;
