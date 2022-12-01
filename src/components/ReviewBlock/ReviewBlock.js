import PropTypes from "prop-types";
import s from "./ReviewBlock.module.css";

// import s from "./Reviews.module.css";

const ReviewBlock = ({ name, age, text }) => {
  return (
    <div className={s.reviewWrapper}>
      <h2 className={s.reviewName}>
        {name}, {age}
      </h2>

      <p className={s.text}>{text}</p>
    </div>
  );
};

ReviewBlock.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default ReviewBlock;
