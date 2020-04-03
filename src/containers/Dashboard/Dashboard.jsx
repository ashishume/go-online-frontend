import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActiveMeetings from "../ActiveMeetings/ActiveMeetings";
import './Dashboard.css'
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <span className="heading">
        Dashboard
        </span>
        <ActiveMeetings />
      </div>
    );
  }
}

export default Dashboard;
