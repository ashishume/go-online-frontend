import React, { Component } from "react";
import history from "../../history";
import { Link } from "react-router-dom";
import './Navbar.css'
export class Navbar extends Component {
  logOut = () => {
    localStorage.clear();
    this.setState({
      isSignedIn: false
    });
    history.push("/login");
  };

  state = {
    isSignedIn: false
  };

  componentDidMount() {
    if (localStorage.getItem("id"))
      this.setState({
        isSignedIn: true
      });
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div className="ui menu">
            <div className="item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/uniprojex.appspot.com/o/logo.png?alt=media&token=0577494a-cd30-4247-8f6b-6efd166d3e87"
                className="logo"
              />
            </div>
            <div className="item">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="item">
              <Link to="/meeting">Meeting</Link>
            </div>
            <div className="right item">
              {this.state.isSignedIn ? (
                <button onClick={this.logOut} className="ui negative button">
                  Logout
                </button>
              ) : (
                <div>
                  <Link to="/login">Signin</Link>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
