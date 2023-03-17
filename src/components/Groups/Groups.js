import PropTypes from "prop-types";
import Group from "./Group";

import s from "./Groups.module.css";

const Groups = ({ title, groups = [] }) => {
  return (
    <section className={s.section}>
      {title && (
        <h2 className={s.title} id="program">
          {title}
        </h2>
      )}

      <ul className={s.groupList}>
        {groups.map((group) => (
          <li key={group.id} className={s.groupItem}>
            <Group
              age={group.age}
              groupTitle={group.groupTitle}
              groupDescription={group.groupDescription}
              groupContent={group.groupContent}
              contentAction1={group.contentAction1}
              contentAction2={group.contentAction2}
              contentAction3={group.contentAction3}
              recomendation={group.recomendation}
              quantiny={group.quantiny}
              price={group.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Groups.defaultProps = {
  title: "группы",
};

Groups.propTypes = {
  title: PropTypes.string,
  groups: PropTypes.array,
};

export default Groups;
