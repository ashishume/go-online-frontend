import React, { Component } from "react";
import ActiveMeetings from "../Meetings/Meetings";
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
