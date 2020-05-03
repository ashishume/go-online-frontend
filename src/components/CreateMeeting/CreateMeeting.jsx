import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./CreateMeeting.css";
import { createMeeting } from "../../store/actions/index";
import { connect } from "react-redux";
class CreateMeeting extends Component {
  onSubmit = (form) => {
    form.containerId = localStorage.getItem("containerId");
    this.props.createMeeting(form);
  };

  state = {
    isPassword: false,
  };

  types = [
    { type: "Meeting", value: "meeting" },
    { type: "Webinar", value: "webinar" },
  ];
  permanentTypes = [
    { type: "One Time Scheduled", value: false },
    // { type: "Endless Meeting", value: true }
  ];
  accessTypes = [
    { type: "Public", value: 1 },
    // { type: "Private", value: 2 }
  ];

  renderError = ({ error, touched }) => {
    if (touched && error)
      return <small className="error-message">{error}</small>;
  };

  renderField = (props) => {
    return (
      <div className="field">
        <label htmlFor={props.input.name}>Meeting Name</label>
        <input autoComplete="off" {...props.input} />
        {this.renderError(props.meta)}
      </div>
    );
  };
  renderPassword = (props) => {
    return (
      <div className="field">
        <label htmlFor={props.input.name}>Password</label>
        <input type="password" autoComplete="off" {...props.input} />
        {this.renderError(props.meta)}
      </div>
    );
  };

  renderRoomType = (props) => {
    return (
      <>
        <div className="field">
          <label htmlFor={props.input.name}>Meeting Type</label>
          <select className="ui dropdown" {...props.input}>
            <option value="">-select a value-</option>
            {this.types.map((data) => {
              return (
                <option key={data.value} value={data.value}>
                  {data.type}
                </option>
              );
            })}
          </select>
          {this.renderError(props.meta)}
        </div>
      </>
    );
  };
  renderPermanentRoom = (props) => {
    return (
      <>
        <div className="field">
          <label htmlFor={props.input.name}>Meeting Duration</label>
          <select className="ui dropdown" {...props.input}>
            <option value="">-select a value-</option>
            {this.permanentTypes.map((data) => {
              return (
                <option key={data.value} value={data.value}>
                  {data.type}
                </option>
              );
            })}
          </select>
          {this.renderError(props.meta)}
        </div>
      </>
    );
  };

  changePasswordState = (value) => {
    console.log(value);
  };

  renderAccessType = (props) => {
    return (
      <>
        <div className="field">
          <label htmlFor={props.input.name}>Meeting Visibility</label>
          <select className="ui dropdown" {...props.input}>
            <option value="">-select a value-</option>
            {this.accessTypes.map((data) => {
              return (
                <option key={data.value} value={data.value}>
                  {data.type}
                </option>
              );
            })}
          </select>
          {this.renderError(props.meta)}
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br />
            <h2>Create Webinar or Meeting</h2>
            <form
              className="form"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <div className="ui form">
                <Field component={this.renderField} name="name" />
                <Field component={this.renderRoomType} name="room_type" />
                <Field
                  component={this.renderPermanentRoom}
                  name="permanent_room"
                />
                <Field component={this.renderAccessType} name="access_type" />
                <button className="ui blue button">Create</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="inner-container">
              <img
                src={require("../../assets/webinar.png")}
                alt="webinar"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.name) {
    error.name = "Must enter a meeting name";
  }
  if (!formValues.room_type) {
    error.room_type = "Must enter a meeting type";
  }
  if (!formValues.permanent_room) {
    error.permanent_room = "Must enter a meeting duration";
  }
  if (!formValues.access_type) {
    error.access_type = "Must enter Meeting visibility";
  }
  return error;
};

const mapStateToProps = (state) => {
  return {};
};
const Redux = connect(mapStateToProps, { createMeeting })(CreateMeeting);

export default reduxForm({
  form: "MeetingForm",
  validate,
})(Redux);
