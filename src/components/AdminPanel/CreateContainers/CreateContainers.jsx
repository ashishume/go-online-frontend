import React, { Component } from "react";
import "./CreateContainers.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addContainer } from "../../../store/actions/admin";
import { Link } from 'react-router-dom';
class CreateContainers extends Component {
  handleSubmit = (props) => {
    this.props.addContainer(props);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/admin-panel-access/admin-dashboard">
              <div>Back</div>
            </Link>
            <div className="inner-container">
              <div className="ui card">
                <div className="content">
                  <h2>Create Container</h2>
                  {/* container_name: req.body.container_name, api_key:
                  req.body.api_key */}
                  <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.handleSubmit)}
                  >
                    <div className="field">
                      <label>Container Name</label>
                      <Field
                        name="container_name"
                        component="input"
                        type="text"
                      />
                    </div>
                    <div className="field">
                      <label>API Key</label>
                      <Field name="api_key" component="input" type="text" />
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

const redux = connect("", { addContainer })(CreateContainers);

export default reduxForm({
  form: "containerForm", // a unique identifier for this form
})(redux);
