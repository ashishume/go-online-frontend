import React, { Component } from "react";
import "./MeetingEnd.css";
import { Link } from "react-router-dom";
class MeetingEnd extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ui segment">
              <img src={require("../../assets/thank-you.png")} />
              <h2>Thank you for taking attending the meeting/webinar</h2>
              <Link to="/dashboard">
                <h3>Dashboard</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetingEnd;
