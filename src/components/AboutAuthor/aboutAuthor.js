import Yana from "../../img/aboutAuthor.jpg";
import s from "./AboutAuthor.module.css";

const AboutAuthor = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div className={s.wrapper}>
        <img src={Yana} alt="Яна" className={s.img} />
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.txt}>Давайте знакомиться!</p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              Меня зовут Яна Рассказова и я работаю в сфере массажа с 2009 года.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              На протяжении своей работы я видела лица разных девушек. Каждое
              лицо уникально. Важно это сохранить и улучшить.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              Мне 33 года и я знаю, что потребности, отношение к себе и ощущения
              меняются в разных промежутках времени.
              <br /> Именно поэтому мой марафон классифицируется по возрастным
              группам.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              Я уверена, что каждая из вас найдёт в этом марафоне то, что нужно
              именно ей!
            </p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              Ведь в этот марафон вложено уйму знаний, усилий и любви.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutAuthor;
