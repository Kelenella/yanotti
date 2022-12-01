import PropTypes from "prop-types";

import s from "./Q&a.module.css";

const Qa = ({ title }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.qaList}>
        <li className={s.qaItem}>
          <p className={s.question}>
            Что мне понадобится для прохождения курса, кроме видео-уроков?
          </p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>Сколько по времени длится массаж?</p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>Вызывает ли массажное масло прыщи?</p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>Возможен ли возврат после покупки?</p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>Когда я могу приступить к курсу?</p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>Когда я увижу результат?</p>
        </li>
        <li className={s.qaItem}>
          <p className={s.question}>
            Кому я могу задать дополнительные вопросы?
          </p>
        </li>
      </ul>
    </section>
  );
};

Qa.propTypes = { title: PropTypes.string.isRequired };

export default Qa;
