import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Copy from "../copyClipboard";
const TableUI = (props) => {
  let meetings = [];
  let active;
  if (props.activeMeetings) {
    meetings = props.activeMeetings;
    active = true;
  } else if (props.inactiveMeetings) {
    meetings = props.inactiveMeetings;
    active = false;
  }
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {props.Labels.map((label) => {
            if (
              (label.value !== "Host" || active === true) &&
              (label.value !== "Join URL" || active === true)
            ) {
              return (
                <Table.HeaderCell key={label.value}>
                  {label.value}
                </Table.HeaderCell>
              );
            }
            return null;
          })}
          {!active ? (
            <Table.HeaderCell key="Sessions">Sessions</Table.HeaderCell>
          ) : null}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {meetings.map((value) => {
          const startDate = new Date(value.starts_at).toLocaleDateString();
          const endDate = new Date(value.ends_at).toLocaleDateString();
          const startTime = new Date(value.starts_at).toLocaleTimeString();
          const endTime = new Date(value.ends_at).toLocaleTimeString();
          return (
            <Table.Row key={value.id}>
              <Table.Cell>{value.id}</Table.Cell>
              <Table.Cell>{value.room_type}</Table.Cell>
              <Table.Cell>{value.name}</Table.Cell>
              <Table.Cell>{value.room_pin}</Table.Cell>
              <Table.Cell>
                {startDate}&nbsp;&nbsp;&nbsp;{startTime}
              </Table.Cell>
              <Table.Cell>
                {endDate}&nbsp;&nbsp;&nbsp;{endTime}
              </Table.Cell>
              <Table.Cell>{value.timezone}</Table.Cell>
              {value.status === "active" ? (
                <Table.Cell>
                  <Link to={`/meeting-room/${value.id}`}>Host Meeting</Link>
                </Table.Cell>
              ) : null}
              {value.status === "active" ? (
                <Table.Cell>
                  <Copy value={value.room_url} />
                </Table.Cell>
              ) : null}
              <Table.Cell>
                {value.status !== "active" ? (
                  <Link
                    to={`/meeting-session/${value.id}?meeting=${value.name}`}
                  >
                    {" "}
                    Sessions/Attendees
                  </Link>
                ) : null}
              </Table.Cell>
            </Table.Row>
          );
        }) //loop end
        }
      </Table.Body>
    </Table>
  );
};

export default TableUI;
