import React, { Component } from "react";
import ActiveMeetingsUI from "./MeetingUI";
import { connect } from "react-redux";
import {
  fetchActiveMeetings,
  fetchInActiveMeetings
} from "../../store/actions/index";
import TableUI from "./TableUI";
class ActiveMeetings extends Component {
  state = {
    loader: false
  };
  componentDidMount() {
    const active = {
      containerId: localStorage.getItem("containerId"),
      id: "active"
    };
    this.props.fetchActiveMeetings(active);
    const inactive = {
      containerId: localStorage.getItem("containerId"),
      id: "inactive"
    };
    this.props.fetchInActiveMeetings(inactive);
  }

  Labels = [
    "Meeting Id",
    "Room Type",
    "Meeting Name",
    "Room PIN",
    "Start Date/Time",
    "Ended Date/Time",
    "Timezone",
    "Host",
    "Join URL",
  ];

  renderActiveMeetings = () => {
    if (!this.props.activeMeetings.length)
      return <p>No active meetings found</p>;
    return (
      <TableUI Labels={this.Labels} meetings={this.props.activeMeetings} />
    );
  };

  renderInactiveMeetings = () => {
    if (!this.props.inactiveMeetings.length)
      return <p>No inactive meetings found</p>;
    return (
      <TableUI Labels={this.Labels} meetings={this.props.inactiveMeetings} />
    );
  };

  render() {
    return (
      <div>
        <ActiveMeetingsUI
          title="TabsName"
          activeContent={this.renderActiveMeetings()}
          inactiveContent={this.renderInactiveMeetings()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.meetings);
  
  return {
    activeMeetings: state.meetings.activeMeetings,
    inactiveMeetings: state.meetings.inactiveMeetings
  };
};
export default connect(mapStateToProps, {
  fetchActiveMeetings,
  fetchInActiveMeetings
})(ActiveMeetings);
