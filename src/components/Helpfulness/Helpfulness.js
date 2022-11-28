import PropTypes from "prop-types";
import s from "./Helpfulness.module.css";

const Helpfulness = ({ title }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>
            10 дней по 15 минут обеспечат результат, как от дорогущих
            косметических процедур
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Получите знания о коже, мышцах лица и способах воздействия на них
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>Сэкономите существенную сумму</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Расслабите триггеры и будете ходить с высоко поднятой головой
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Сбережете своё драгоценное время. Вы не тратите время на дорогу,
            а делаете короткие процедуры дома в свободное время
          </p>
        </li>
      </ul>
    </section>
  );
};

Helpfulness.propTypes = { title: PropTypes.string.isRequired };

export default Helpfulness;
