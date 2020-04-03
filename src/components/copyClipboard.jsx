import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Copy extends Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    return (
      <div>
        <div className="ui input">
          <input
            value={this.props.value}
            onChange={({ target: { value } }) =>
              this.setState({ value, copied: false })
            }
          />
          <CopyToClipboard
            text={this.props.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <button className="ui mini button">Copy</button>
          </CopyToClipboard>
        </div>

        {this.state.copied ? (
          <div className="ui mini message">Copied</div>
        ) : null}
      </div>
    );
  }
}

export default Copy;
