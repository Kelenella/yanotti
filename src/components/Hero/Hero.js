import Button from "../Button/Button";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.section}>
      <h2 className={s.subTitle}>Онлайн марафон</h2>
      <div className={s.heroBlock}>
        <h1 className={s.title}>делаем массаж лица вместе</h1>
        <p className={s.text}>Хотите помолодеть за 10 дней на 5 лет?</p>
        <Button text="Оставить заявку" type="submit" />
      </div>
    </section>
  );
};

export default Hero;
