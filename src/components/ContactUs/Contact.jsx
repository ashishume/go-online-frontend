import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./Contact.css";
import { contactForm } from "../../store/actions/admin";
import { connect } from "react-redux";
import EmailContent from "./EmailContent";
import { Link } from "react-router-dom";
class Contact extends Component {
  onSubmit = (props) => {
    const content = EmailContent(props);
    this.props.contactForm(content);
  };

  renderInputField = (props) => {
    return (
      <div className="field">
        <label htmlFor={props.input.name}>
          {props.input.name.toUpperCase()}
        </label>
        <input type="text" {...props.input} />
        {this.renderError(props.meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error)
      return <small className="error-message">{error}</small>;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/">
              <span>Back</span>
            </Link>
            <div className="inner-container">
              <div className="ui card">
                <div className="content">
                  <h2>Contact Form</h2>
                  <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                  >
                    <Field name="name" component={this.renderInputField} />
                    <Field name="email" component={this.renderInputField} />
                    <Field
                      name="phone"
                      type="number"
                      component={this.renderInputField}
                    />
                    <Field name="city" component={this.renderInputField} />
                    <Field name="state" component={this.renderInputField} />
                    <Field
                      name="organisation"
                      component={this.renderInputField}
                    />
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

const validate = (formValues) => {
  const error = {};

  if (!formValues.name) {
    error.name = `Name is required`;
  }
  if (!formValues.email) {
    error.email = "Email is required";
  }
  if (!formValues.phone) {
    error.phone = "Phone is required";
  }
  if (!formValues.city) {
    error.city = "City is required";
  }
  if (!formValues.state) {
    error.state = "State is required";
  }

  return error;
};

const redux = connect("", { contactForm })(Contact);

export default reduxForm({
  form: "contactForm",
  validate, // a unique identifier for this form
})(redux);
