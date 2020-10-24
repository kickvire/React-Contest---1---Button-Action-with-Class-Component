import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.showText = this.showText.bind(this);
  }
  showText() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div id="main">
        <button id="btn" onClick={this.showText}>
          Click
        </button>
        {this.state.isClicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
