import React, { Suspense, Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  // useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
const Login = React.lazy(() => import("../../components/Login/Login"));
const Dashboard = React.lazy(() =>
  import("../../components/Dashboard/Dashboard")
);
const Meeting = React.lazy(() =>
  import("../../components/CreateMeeting/CreateMeeting")
);
const MeetingRoom = React.lazy(() =>
  import("../../components/MeetingRoom/MeetingRoom")
);
const MainPage = React.lazy(() => import("../../components/MainPage/MainPage"));
const MeetingEnd = React.lazy(() =>
  import("../../components/MeetingEnd/MeetingEnd")
);
const AboutUs = React.lazy(() => import("../../components/AboutUs/AboutUs"));

//Admin Routes
const AdminLogin = React.lazy(() => import("../AdminPanel/Auth/Login"));
const AdminDashboard = React.lazy(() =>
  import("../AdminPanel/AdminDashboard/AdminDashboard")
);

class MainNavigation extends Component {
  render() {
    return (
      <div>
        {/* <AdminPanelNavigation /> */}
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
            <ProtectedRoutes path="/thank-you" exact component={MeetingEnd} />
            <ProtectedRoutes path="/meeting" exact component={Meeting} />
            <Route path="/about-us" exact component={AboutUs} />
            <ProtectedRoutes
              path="/meeting-room/:id"
              exact
              component={MeetingRoom}
            />

            {/* Admin Routes */}
            <Route
              path="/admin-panel-access/login"
              exact
              component={AdminLogin}
            />
            <AdminProtectedRoutes
              path="/admin-panel-access/admin-dashboard"
              exact
              component={AdminDashboard}
            />
            <Route path="*" component={() => "404 NOT FOUND"}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MainNavigation;
