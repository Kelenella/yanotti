import PropTypes from "prop-types";
import s from "./Video.module.css";

const Video = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
    </section>
  );
};

Video.propTypes = { title: PropTypes.string.isRequired };

export default Video;
