import Button from "../Button/Button";
import Yana from "../../img/heroImg.jpg";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.section}>
      <div className={s.heroWrapper}>
        <div>
          <h2 className={s.subTitle}>Онлайн марафон</h2>
          <h1 className={s.title}>делаем массаж лица вместе</h1>
          <p className={s.text}>Хотите помолодеть за 10 дней на 5 лет?</p>
          <Button text="Оставить заявку" type="submit" />
        </div>
        <div>
          <img src={Yana} alt="Яна" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
