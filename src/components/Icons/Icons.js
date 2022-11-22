import svg from "../../img/sprite.svg";
import s from "./Icons.module.css";

const Icons = ({ name, className, color, stroke, width, height }) => {
  return (
    <svg
      className={s.className}
      fill={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
    </svg>
  );
};

export default Icons;
