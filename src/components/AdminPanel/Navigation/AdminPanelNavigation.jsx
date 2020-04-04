import React, { Suspense, Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
// import ProtectedRoutes from "./ProtectedRoutes";
const AdminLogin = React.lazy(() => import("../Auth/Login"));

class AdminPanelNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/auth" exact component={AdminLogin} />
      </Fragment>
    );
  }
}

export default AdminPanelNavigation;
