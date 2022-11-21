import PropTypes from "prop-types";

// import s from "./Reviews.module.css";

const ReviewBlock = ({ name, age, text }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <p>{text}</p>
    </div>
  );
};

ReviewBlock.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default ReviewBlock;
