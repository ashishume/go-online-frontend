import React, { Suspense, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import ProtectedRoutes from "./ProtectedRoutes";

const Login = React.lazy(() => import("../../containers/Login/Login"));
const Dashboard = React.lazy(() =>
  import("../../containers/Dashboard/Dashboard")
);
const Meeting = React.lazy(() => import("../../containers/Meeting"));
const MeetingRoom = React.lazy(() =>
  import("../../containers/MeetingRoom/MeetingRoom")
);
const MainPage = React.lazy(() => import("../../containers/MainPage/MainPage"));

class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={Login} />
            <ProtectedRoutes path="/dashboard" exact component={Dashboard} />
            <ProtectedRoutes path="/meeting" exact component={Meeting} />
            <ProtectedRoutes
              path="/meeting-room/:id"
              exact
              component={MeetingRoom}
            />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MainNavigation;
