import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import s from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
    });
  };

  render() {
    const { name, phone, email } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.input}
          placeholder="Имя"
        />
        <input
          name="phone"
          value={phone}
          onChange={handleChange}
          className={s.input}
          placeholder="Телефон"
        />
        <input
          name="email"
          value={email}
          onChange={handleChange}
          className={s.input}
          placeholder="Электронная почта"
        />
        <Button text={"записаться"} />
      </form>
    );
  }
}

// Form.defaultProps = { submitBtnTxt: "записаться" };

Form.propTypes = { handleClick: PropTypes.func };

export default Form;
