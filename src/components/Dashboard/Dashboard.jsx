import React, { Component } from "react";
import Meetings from "../Meetings/Meetings";
import './Dashboard.css'
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <span className="heading">
        Dashboard
        </span>
        <Meetings />
      </div>
    );
  }
}

export default Dashboard;
