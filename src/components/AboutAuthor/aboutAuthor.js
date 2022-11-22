import s from "./AboutAuthor.module.css";

const AboutAuthor = ({ title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
    </section>
  );
};

export default AboutAuthor;
