import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
    </>
  );
}
export default AuthNav;
