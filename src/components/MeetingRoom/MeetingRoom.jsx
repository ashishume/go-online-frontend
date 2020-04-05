import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeetingByRoomId } from "../../store/actions/index";
import "./MeetingRoom.css";
class MeetingRoom extends Component {
  componentDidMount() {
    this.renderMeeting();
  }

  renderMeeting = () => {
    const body = {
      id: this.props.match.params.id,
      containerId: localStorage.getItem("containerId"),
    };
    this.props.fetchMeetingByRoomId(body);
  };

  render() {
    const URL = `${this.props.meeting.room_url}?l=${this.props.meeting.autologin_hash}`;
    return (
      <div>
        <div className="inner-container">
          <iframe
            className="iframe"
            src={URL}
            frameBorder="0"
            title="meeting-room"
            height="100%"
            width="100%"
            allow="camera;microphone"
          ></iframe>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    meeting: state.meetings.meeting,
  };
};
export default connect(mapStateToProps, { fetchMeetingByRoomId })(MeetingRoom);
