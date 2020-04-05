import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./Login.css";
import { adminSignIn } from "../../../store/actions/admin";
import { connect } from "react-redux";
import history from "../../../history";

class AdminLogin extends Component {
  handleSubmit = (props) => {
    this.props.adminSignIn(props);
  };

  render() {
    if (
      localStorage.getItem("type") === "1" ||
      localStorage.getItem("type") === "0"
    ) {
      history.push("/admin-panel-access/admin-dashboard");
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-container">
              <div className="ui card">
                <div className="content">
                  <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.handleSubmit)}
                  >
                    <div className="field">
                      <label>Email</label>
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                      />{" "}
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <button className="ui button" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const redux = connect("", { adminSignIn })(AdminLogin);

export default reduxForm({
  form: "adminLogin", // a unique identifier for this form
})(redux);
