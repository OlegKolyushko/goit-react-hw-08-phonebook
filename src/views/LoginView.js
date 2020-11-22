import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from './styles/RegisterLoginView.module.css';

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handlerSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1 className={styles.title}>LoginPage</h1>
        <form className={styles.form} onSubmit={this.handlerSubmit}>
          <label className={styles.label}>
            Email
            <input
            className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handlerChange}
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
            />
          </label>
          <button className={styles.button} type="submit">
              Sign In
            </button>
        </form>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
