import PropTypes from "prop-types";
import Button from "../Button/Button";

import s from "./Groups.module.css";

const Groups = ({ title }) => {
  return (
    <section className={s.section}>
      {title && (
        <h2 className={s.title} id="program">
          {title}
        </h2>
      )}

      <ul className={s.groupList}>
        <li className={s.groupItem}>
          <div className={s.groupNumber}>
            <span className={s.spanNumber}>25+</span>
          </div>
          <div className={s.textWrapper}>
            <h3 className={s.textTitle}>Глубокая работа</h3>
            <p className={s.text1}>
              Тургор кожи хороший и морщинки,если и есть,очень мелкие. Работа
              направлена на профилактику и предотвращение морщин и заломов.
            </p>
            <p className={s.fs}>Вы научитесь</p>
            <ul className={s.textList1}>
              <li>
                <p className={s.fs}>запускать кровообращение</p>
              </li>
              <li>
                <p className={s.fs}>укреплять мышцы лица</p>
              </li>
              <li>
                <p className={s.fs}>освоите технику баночного массажа</p>
              </li>
            </ul>
            <p className={s.fs}>
              Рекомендация
              <br /> проходить курс 1 раз в год
            </p>
            <span className={s.spanPrice}>5 000 грн</span>
            <Button text="оплатить" type="submit" />
          </div>
        </li>
        <li className={s.groupItem}>
          <div className={s.groupNumber}>
            <span className={s.spanNumber}>35+</span>
          </div>
          <div>
            <h3 className={s.textTitle}>Более точечный массаж</h3>
            <p className={s.text1}>
              Замечаете первые проблемные места. По утрам лицо отекает. Видны
              мелкие морщинки
            </p>
            <p className={s.fs}>Вы научитесь</p>
            <ul className={s.textList2}>
              <li>
                <p className={s.fs}>прорабатывать мыщцы</p>
              </li>
              <li>
                <p className={s.fs}>
                  снимать спазмы, чтобы не образовывались глубокие заломы
                </p>
              </li>
              <li>
                <p className={s.fs}>освоите технику массажа скребком Гуаша</p>
              </li>
            </ul>
            <p className={s.fs}>
              Рекомендация
              <br /> проходить курс 2 раза в год
            </p>
            <span className={s.spanPrice}>5 000 грн</span>
            <Button text="оплатить" type="submit" />
          </div>
        </li>
        <li className={s.groupItem}>
          <div className={s.groupNumber}>
            <span className={s.spanNumber}>45+</span>
          </div>
          <div>
            <h3 className={s.textTitle}>Техники и движения самые нежные</h3>
            <p className={s.text1}>
              Видны признаки увядания кожи, изменяется линия овала, кожа
              становится тонкой
            </p>
            <p className={s.fs}>Вы научитесь</p>
            <ul className={s.textList3}>
              <li>
                <p className={s.fs}>запускать обменные процессы</p>
              </li>
              <li>
                <p className={s.fs}>слышать свои ощущения</p>
              </li>
              <li>
                <p className={s.fs}>
                  освоите технику массажа с помощью роллера из натурального
                  камня
                </p>
              </li>
            </ul>
            <p className={s.fs}>
              Рекомендация
              <br /> проходить курс 3 раза в год
            </p>
            <span className={s.spanPrice}>5 000 грн</span>
            <Button text="оплатить" type="submit" />
          </div>
        </li>
      </ul>
    </section>
  );
};

Groups.propTypes = { title: PropTypes.string };

export default Groups;
