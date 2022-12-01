import PropTypes from "prop-types";
import Form from "../Form";
import ImgForm from "../../img/formImg.jpg";
import s from "./SectionForm.module.css";

const SectionForm = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div className={s.formWrapper}>
        <img src={ImgForm} alt="Фото Яны" className={s.img} />
        <Form />
      </div>
    </section>
  );
};

SectionForm.propTypes = { title: PropTypes.string.isRequired };

export default SectionForm;
