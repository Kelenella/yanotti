import PropTypes from "prop-types";
import Form from "../Form";
import ImgForm from "../../img/formImg.jpg";
import s from "./SectionForm.module.css";

const SectionForm = ({ text: { title }, onSubmit }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div className={s.formWrapper}>
        <img src={ImgForm} alt="Фото Яны" className={s.img} />
        <Form onSubmit={onSubmit} />
      </div>
    </section>
  );
};

SectionForm.defaultProps = { text: { title: "записаться на марафон" } };

SectionForm.propTypes = { text: PropTypes.shape({ title: PropTypes.string }) };

export default SectionForm;
