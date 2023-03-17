import PropTypes from "prop-types";
import ReviewBlock from "../ReviewBlock/ReviewBlock";

import s from "./ReviewList.module.css";

const ReviewList = ({ title, items = [] }) => {
  return (
    <section>
      <h2 className={s.title} id="reviews">
        {title}
      </h2>

      <ul className={s.reviewList}>
        {items.map((item) => (
          <li key={item.id} className={s.reviewItem}>
            <ReviewBlock name={item.name} age={item.age} text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
};

ReviewList.defaultProps = { title: "отзывы наших учениц" };

ReviewList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default ReviewList;
