import React from "react";

import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Copy from "../copyClipboard";
const TableUI = props => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {props.Labels.map(label => {
            return <Table.HeaderCell key={label}>{label}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.meetings.map(value => {
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
              <Table.Cell>
                {value.status == "active" ? (
                  <Link to={`/meeting-room/${value.id}`}>Host Meeting</Link>
                ) : (
                  value.status
                )}
              </Table.Cell>
              <Table.Cell>
                <Copy value={value.room_url} />
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
