// import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./Form.module.css";

const Form = () => {
  return (
    <form className={s.form}>
      <input name="name" className={s.input} placeholder="Имя" />
      <input name="phone" className={s.input} placeholder="Телефон" />
      <input name="email" className={s.input} placeholder="Электронная почта" />
      <Button text="записаться" />
    </form>
  );
};

Form.propTypes = {};

export default Form;
