import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {
  render() {
      return (
        <div>
          <div class="seven wide column">
            <h4 class="ui inverted header">HelixLive</h4>
            <p>
              Created by{" "}
              <a
                className="link"
                href="https://www.linkedin.com/in/ashishume/"
                target="_blank"
              >
                <b>Ashish Debnath</b>
              </a>
            </p>
          </div>
        </div>
      );
  }
}

export default Footer;
