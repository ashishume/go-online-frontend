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

// id: 3085824
// room_type: "meeting"
// room_pin: 219415442
// name: "Test"
// name_url: "test"
// starts_at: "2020-04-02T13:17:00+05:30"
// ends_at: "2020-04-02T16:17:00+05:30"
// access_type: 1
// lobby_enabled: true
// lobby_description: ""
// registration_enabled: 0
// status: "active"
// timezone: "Asia/Kolkata"
// timezone_offset: 19800
// paid_enabled: 0
// automated_enabled: 0
// created_at: "2020-04-02T13:17:16+05:30"
// updated_at: "2020-04-02T13:17:16+05:30"
// type: 0
// permanent_room: false
// ccc: "2020-04-02 07:47:00"
// access_role_hashes: {listener: "f4eae8588dfceb72c929b4005e859e4b", presenter: "86ca6783778a5a73f11101005e859e4b", host: "7aef4842f77f4c953435c0005e859e4b"}
// room_url: "https://uniprojex.clickmeeting.com/test"
// phone_presenter_pin: 532917715
// phone_listener_pin: 323361374
// embed_room_url: "https://embed.clickmeeting.com/embed_conference.html?r=1712711113085824"
// widgets_hash: "rDh549"
// recorder_list: []
// settings: {show_on_personal_page: true, thank_you_emails_enabled: true, connection_tester_enabled: false}
// autologin_hashes: {host: "ZmN4AGtlARO8YKkNozM1qzM1nUclDUE6oaM5YaOvrxO8YKkNnT…paZ0BQDlpmp3pmEjBGHmAQZ1pQNjZQIlBQH5pwEiDUjgsRN__"}
// autologin_hash: "ZmN4AGtlARO8YKkNozM1qz
