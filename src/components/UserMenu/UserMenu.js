import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import avatar from "../../images/user.png";
import styles from './UserMenu.module.css';

function UserMenu({ name, onLogout }) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" />
      <span className={styles.info}>Welcome, {name}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});
export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
