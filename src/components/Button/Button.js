import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ text, type }) => {
  return (
    <button type={type} className={s.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
