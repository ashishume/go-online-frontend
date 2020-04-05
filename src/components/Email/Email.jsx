import React, { Component } from "react";
// import { Link } from "react-router-dom";
class Email extends Component {
  render() {
    const body = "I want a new Connection";
    const subject = "Regarding new connection";

    const URL = `https://mail.google.com/mail/?view=cm&fs=1&to=ashishume@gmail.com&cc=gauravclb96@gmail.com&su=${subject}&body=${body}`;

    return (
      <div>
        <br />
        <span>Need new connection?</span>&nbsp;
        <a href={URL} target="_blank" rel="noopener noreferrer">
          Contact us
        </a>
      </div>
    );
  }
}
export default Email;
