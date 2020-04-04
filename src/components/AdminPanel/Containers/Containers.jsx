import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchContainers } from "../../../store/actions/admin";
import { Link } from "react-router-dom";
import history from "../../../history";

class Containers extends Component {
  componentDidMount() {
    this.props.fetchContainers();
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
              <button className="ui primary button">Create Container</button>
              <button className="ui red button" onClick={this.logOut}>
                Logout
              </button>

              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Container Name</th>
                    <th>api_key</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.props.containers.map((value) => {
                      return (
                        <Fragment key={value.api_key}>
                          <td data-label={value.container_name}>
                            {value.container_name}
                          </td>
                          <td data-label={value.api_key}>{value.api_key}</td>
                        </Fragment>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    containers: state.admin.containers,
  };
};

export default connect(mapStateToProps, { fetchContainers })(Containers);
