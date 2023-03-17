import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    const { toggle } = this;
    return (
      <div className={s.dropdown}>
        <button onClick={toggle} type="button" className={s.dropdownToggle}>
          {visible ? "Скрыть" : "Показать"}
        </button>

        {visible && <div className={s.dropdownMenu}>Выпадающее меню</div>}
      </div>
    );
  }
}

Dropdown.propTypes = { visible: PropTypes.bool, toggle: PropTypes.func };

export default Dropdown;
