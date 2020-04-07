import React, { Fragment, Component } from "react";
import { Table, Modal } from "semantic-ui-react";
import "./AttendanceModal.css";
class Attendees extends Component {
  render() {
    
    return (
      <Fragment>
        <Modal open={this.props.show}>
          <Modal.Header>Attendees</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell key="name">Name</Table.HeaderCell>
                    <Table.HeaderCell key="email">Email</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.props.data.map((v) => {
                    return (
                      <Table.Row key={v.id}>
                        <Table.Cell>{v.nickname}</Table.Cell>
                        <Table.Cell>{v.email}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <button className="ui button" onClick={this.props.onHide}>
              Cancel
            </button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  }
}

export default Attendees;
