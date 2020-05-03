import React, { Suspense, Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  // useRouteMatch,
} from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
const Login = React.lazy(() => import("../../components/Login/Login"));
const Dashboard = React.lazy(() =>
  import("../../components/Dashboard/Dashboard")
);
const Contact = React.lazy(() => import("../../components/ContactUs/Contact"));
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
const MeetingSessions = React.lazy(() =>
  import("../../components/MeetingSessions/MeetingSessions")
);
const Privacy = React.lazy(() => import("../PrivacyPolicy/privacyPolicy"));

//Admin Routes
const AdminLogin = React.lazy(() => import("../AdminPanel/Auth/Login"));
const AdminDashboard = React.lazy(() =>
  import("../AdminPanel/AdminDashboard/AdminDashboard")
);
const CreateContainers = React.lazy(() =>
  import("../AdminPanel/CreateContainers/CreateContainers")
);
const CreateUsers = React.lazy(() =>
  import("../AdminPanel/CreateUser/CreateUser")
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
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/privacy-policy" exact component={Privacy} />
            <ProtectedRoutes
              path="/meeting-room/:id"
              exact
              component={MeetingRoom}
            />
            <ProtectedRoutes
              path="/meeting-session/:id"
              exact
              component={MeetingSessions}
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
            <AdminProtectedRoutes
              path="/admin-panel-access/create"
              exact
              component={CreateContainers}
            />
            <AdminProtectedRoutes
              path="/admin-panel-access/create-user"
              exact
              component={CreateUsers}
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
