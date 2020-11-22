import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";


const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
