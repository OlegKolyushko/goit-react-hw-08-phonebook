import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";
import { authSelectors } from "../../redux/auth";
import AuthNav from "../AuthNav/AuthNav";

function AppBar({ isAuth }) {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(AppBar);
