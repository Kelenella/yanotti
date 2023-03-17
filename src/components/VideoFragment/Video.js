import PropTypes from "prop-types";
import videoFragment from "../../img/video.jpg";
import s from "./Video.module.css";

const Video = ({ title }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <img src={videoFragment} alt="видео-фрагмент" className={s.img} />
    </section>
  );
};

Video.defaultProps = { title: "посмотрите короткий фрагмент одного из уроков" };

Video.propTypes = { title: PropTypes.string };

export default Video;
