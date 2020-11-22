import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from './styles/RegisterLoginView.module.css';


class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handlerSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h1 className={styles.title}>RegisterPage</h1>
        <form className={styles.form} onSubmit={this.handlerSubmit}>
          <label className={styles.label}>
            Name
            <input
            className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handlerChange}
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
            className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handlerChange}
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <input
            className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handlerChange}
              required
            />
          </label>
          <button type="submit" className={styles.button}>Register</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView
);
