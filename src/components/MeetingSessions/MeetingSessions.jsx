import React, { Component, Fragment } from "react";
import "./MeetingSession.css";
import { connect } from "react-redux";
import { fetchSessions, fetchAttendees } from "../../store/actions/index";
import { Table } from "semantic-ui-react";
import qs from "query-string";
// import { Link } from "react-router-dom";
import Attendees from "./AttendeesModal";
class MeetingSessions extends Component {
  name = qs.parse(this.props.location.search);

  roomId = this.props.match.params.id;
  componentDidMount() {
    const body = {
      roomId: this.roomId,
      containerId: localStorage.getItem("containerId"),
    };
    this.props.fetchSessions(body);
  }

  renderSessions = () => {
    if (this.props.sessions.sessions) {
      return this.props.sessions.sessions.map((value) => {
        const startDate = new Date(value.start_date).toLocaleDateString();
        const endDate = new Date(value.end_date).toLocaleDateString();
        const startTime = new Date(value.start_date).toLocaleTimeString();
        const endTime = new Date(value.end_date).toLocaleTimeString();

        return (
          <Table.Row key={value.id}>
            <Table.Cell>{value.total_visitors}</Table.Cell>
            <Table.Cell>{value.max_visitors}</Table.Cell>
            <Table.Cell>
              {startDate}&nbsp;&nbsp;&nbsp;{startTime}
            </Table.Cell>
            <Table.Cell>
              {endDate}&nbsp;&nbsp;&nbsp;{endTime}
            </Table.Cell>
            <Table.Cell>
              <button
                className="ui teal button"
                onClick={() => this.getModal(value, this.roomId)}
              >
                Attendees
              </button>

              {this.state.dataModal.length ? (
                <Attendees
                  show={this.state.showModal}
                  onHide={this.hideModal}
                  data={this.state.dataModal}
                />
              ) : null}
            </Table.Cell>
          </Table.Row>
        );
      });
    }
  };

  state = {
    showModal: false,
    dataModal: [],
    roomId: "",
  };

  getModal = (data, roomId) => {
    const body = {
      sessionId: data.id,
      roomId: roomId,
      containerId: localStorage.getItem("containerId"),
    };

    this.props.fetchAttendees(body);
    // if (this.props.attendees.length) {
    this.setState({
      showModal: true,
      dataModal: this.props.attendees,
    });


    // }
  };

  hideModal = () => {
    this.setState({ showModal: false, dataModal: [] });
  };

  render() {
    return (
      <Fragment>
        <br />
        <h2>Sessions for {this.name.meeting}</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell key="tVisitors">
                Total Visitors
              </Table.HeaderCell>
              <Table.HeaderCell key="mVisitors">Max Visitors</Table.HeaderCell>
              <Table.HeaderCell key="sDate">Start Date</Table.HeaderCell>
              <Table.HeaderCell key="nDate">End Date</Table.HeaderCell>
              <Table.HeaderCell key="Attendees">
                List of Attendees
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderSessions()}</Table.Body>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions.sessions,
    attendees: state.sessions.attendees,
  };
};
export default connect(mapStateToProps, { fetchSessions, fetchAttendees })(
  MeetingSessions
);
