import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./Groups.module.css";

const Group = ({
  age,
  groupTitle,
  groupDescription,
  groupContent,
  contentAction1,
  contentAction2,
  contentAction3,
  recomendation,
  quantiny,
  price,
}) => {
  return (
    <>
      <div className={s.groupNumber}>
        <span className={s.spanNumber}>{age}</span>
      </div>
      <div className={s.textWrapper}>
        <h3 className={s.textTitle}>{groupTitle}</h3>
        <p className={s.text1}>{groupDescription}</p>
        <p className={s.fs}>{groupContent}</p>
        <ul className={s.textList}>
          <li>
            <p className={s.fs}>{contentAction1}</p>
          </li>
          <li>
            <p className={s.fs}>{contentAction2}</p>
          </li>
          <li>
            <p className={s.fs}>{contentAction3}</p>
          </li>
        </ul>
        <p className={s.fs}>
          {recomendation}
          <br /> {quantiny}
        </p>
        <span className={s.spanPrice}>{price} грн</span>
        <Button text="оплатить" type="submit" />
      </div>
    </>
  );
};

Group.propTypes = {
  age: PropTypes.string,
  groupTitle: PropTypes.string,
  groupDescription: PropTypes.string,
  groupContent: PropTypes.string,
  contentAction1: PropTypes.string,
  contentAction2: PropTypes.string,
  contentAction3: PropTypes.string,
  recomendation: PropTypes.string,
  quantiny: PropTypes.string,
  price: PropTypes.string,
};

export default Group;
