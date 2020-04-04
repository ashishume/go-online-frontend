import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./Login.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/index";
import history from "../../history";
import Email from "../Email/Email";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
class Login extends Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error)
      return <small className="error-message">{error}</small>;
  };

  renderField = props => {
    return (
      <div className="field">
        <label htmlFor={props.input.name}>Meeting Name</label>
        <input autoComplete="off" {...props.input} />
        {this.renderError(props.meta)}
      </div>
    );
  };
  renderPassword = props => {
    return (
      <div className="field">
        <label htmlFor={props.input.name}>Password</label>
        <input type="password" autoComplete="off" {...props.input} />
        {this.renderError(props.meta)}
      </div>
    );
  };

  render() {
    if (localStorage.getItem("id")) {
      history.push("/dashboard");
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <div className="inner-container">
                <div className="ui cards">
                  <div className="card">
                    <div className="content">
                      <div style={{ textAlign: "center" }}>
                        <Link to="/">Back Home</Link>
                      </div>
                      <h2>Login</h2>
                      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className="ui form">
                          <Field component={this.renderField} name="email" />
                          <Field
                            component={this.renderPassword}
                            name="password"
                          />

                          <button className="fluid ui green button">
                            Login
                          </button>

                          <Email />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <span className="footer">
            <p>
              Created by{" "}
              <a
                className="link"
                href="https://www.linkedin.com/in/ashishume/"
                target="_blank"
              >
                <b>Ashish Debnath</b>
              </a>
            </p>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.email) {
    error.name = "Email is required";
  }
  if (!formValues.password) {
    error.room_type = "Password is required";
  }

  return error;
};

const redux = connect("", { signIn })(Login);

export default reduxForm({
  form: "LoginForm",
  validate
})(redux);
