import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isSignedIn;
  if (localStorage.getItem("type")) {
    isSignedIn = true;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSignedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
