import PropTypes from "prop-types";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
const ReviewList = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ReviewBlock name={item.name} age={item.age} text={item.text} />
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default ReviewList;
