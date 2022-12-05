import PropTypes from "prop-types";
import img from "../../img/qa.jpg";

import s from "./Q&a.module.css";

const Qa = ({ title }) => {
  return (
    <section className={s.section}>
      <div className={s.wrapperQa}>
        <h2 className={s.title} id="qa">
          {title}
        </h2>
        <ul className={s.qaList}>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>
                Что мне понадобится для прохождения курса, кроме видео-уроков?
              </p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>Сколько по времени длится массаж?</p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>Вызывает ли массажное масло прыщи?</p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>Возможен ли возврат после покупки?</p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>Когда я могу приступить к курсу?</p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>Когда я увижу результат?</p>
            </div>
          </li>
          <li className={s.qaItem}>
            <div>
              <p className={s.question}>
                Кому я могу задать дополнительные вопросы?
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src={img} alt="hands" />
      </div>
    </section>
  );
};

Qa.propTypes = { title: PropTypes.string.isRequired };

export default Qa;
