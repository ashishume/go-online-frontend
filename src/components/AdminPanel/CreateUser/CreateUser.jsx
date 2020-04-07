import React, { Component } from "react";
import "./CreateUser.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/admin";
import { Link } from "react-router-dom";
import "./CreateUser.css";
class CreateUser extends Component {
  handleSubmit = (props) => {
    this.props.addUser(props);
    console.log(props);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/admin-panel-access/admin-dashboard">
              <div>Back</div>
            </Link>
            <br />
            <br />
            <br />
            <div className="inner-container">
              <div className="ui card">
                <div className="content">
                  <h2>Create User</h2>
                  <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.handleSubmit)}
                  >
                    <div className="field">
                      <label>Email</label>
                      <Field name="email" component="input" type="text" />
                    </div>
                    <div className="field">
                      <label>Name</label>
                      <Field name="name" component="input" type="text" />
                    </div>
                    <div className="field">
                      <label>User Plan</label>
                      <Field name="user_plan" component="input" type="text" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <Field name="phone" component="input" type="text" />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <Field name="password" component="input" type="text" />
                    </div>
                    <div className="field">
                      <label>container Id</label>
                      <Field name="containerId" component="input" type="text" />
                    </div>
                    <button className="ui primary button" type="submit">
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

const redux = connect("", { addUser })(CreateUser);

export default reduxForm({
  form: "addUserForm", // a unique identifier for this form
})(redux);
