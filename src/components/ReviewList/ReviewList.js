import PropTypes from "prop-types";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import s from "./ReviewList.module.css";

const ReviewList = ({ title, items = [] }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ReviewBlock name={item.name} age={item.age} text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
};

ReviewList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default ReviewList;
