import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchContainers, fetchUser } from "../../../store/actions/admin";
import { Link } from "react-router-dom";
import history from "../../../history";

class Containers extends Component {
  componentDidMount() {
    this.props.fetchContainers();
    this.props.fetchUser();
  }

  logOut = () => {
    localStorage.removeItem("type");
    history.push("/");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/">Back Home</Link>
              <h1>Containers</h1>
              <Link to="/admin-panel-access/create">
                <button className="ui primary button">Create Container</button>
              </Link>
              <Link to="/admin-panel-access/create-user">
                <button className="ui green button">Create User</button>
              </Link>
              <button className="ui red button" onClick={this.logOut}>
                Logout
              </button>

              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Container Id</th>
                    <th>Container Name</th>
                    <th>api_key</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.containers.length
                    ? this.props.containers.map((value) => {
                        return (
                          <Fragment key={value.api_key}>
                            <tr>
                              <td data-label={value._id}>{value._id}</td>
                              <td data-label={value.container_name}>
                                {value.container_name}
                              </td>

                              <td data-label={value.api_key}>
                                {value.api_key}
                              </td>
                            </tr>
                          </Fragment>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>

            <div className="col-md-12">
              <br />
              <h2>Users</h2>

              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>User Plan</th>
                    <th>Container Id</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.users.length
                    ? this.props.users.map((value) => {
                        return (
                          <Fragment key={value._id}>
                            <tr>
                              <td data-label={value._id}>{value._id}</td>
                              <td data-label={value.name}>{value.name}</td>
                              <td data-label={value.email}>{value.email}</td>
                              <td data-label={value.phone}>{value.phone}</td>
                              <td data-label={value.user_plan}>
                                {value.user_plan}
                              </td>
                              <td data-label={value.containerId}>
                                {value.containerId}
                              </td>
                            </tr>
                          </Fragment>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// _id: "5e85e59e4464050017f56766";
// email: "demo@gmail.com";
// name: "Demo User";
// phone: 855798095;
// user_plan: "STARTER_PLAN";
// containerId: "5e84592eecbc0b0e93fa0d3b";

const mapStateToProps = (state) => {
  console.log(state.admin.users);

  return {
    containers: state.admin.containers,
    users: state.admin.users,
  };
};

export default connect(mapStateToProps, { fetchContainers, fetchUser })(
  Containers
);
