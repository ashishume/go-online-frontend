import React, { Component, Fragment } from "react";
import "./Message.css";
class Message extends Component {
  state = {
    message: "",
    isSuccess: "",
  };

  componentDidMount() {
    this.setState({
      message: this.props.message,
      isSuccess: this.props.isSuccess,
    });
  }

  // componentDidUpdate() {
  //   setTimeout(() => this.setState({ message: "" }), 1000);
  // }
  render() {
    setTimeout(() => {
      this.setState({
        message: "",
      });
    }, 2000);
    return (
      <Fragment>
        {this.state.message ? (
          <div className="overlay">
            <div className="message">
              {this.state.isSuccess ? (
                <div className="ui green message">
                  <p>{this.state.message}</p>
                </div>
              ) : (
                <div className="ui red message">
                  <p>{this.state.message}</p>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Message;
