import PropTypes from "prop-types";

import s from "./Groups.module.css";

const Groups = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};

Groups.propTypes = { title: PropTypes.string, children: PropTypes.node };

export default Groups;
