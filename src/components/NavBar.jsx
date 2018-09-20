import React, { Component } from "react";

class NavBar extends Component {
  state = {
    message: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.score > prevProps.score) {
      this.setState({ message: "Correct!" });
    } else if (this.props.score < prevProps.score) {
      this.setState({ message: "Incorrect!" });
    }
  }

  render() {
    const { score, highScore } = this.props;
    return (
      <React.Fragment>
        <nav className="site-header sticky-top py-1">
          <div
            id="nav"
            className="container d-flex flex-column flex-md-row justify-content-around"
          >
            <div>
              <span id="score-keep">
                Score: {score} | High Score: {highScore}
              </span>
            </div>
            <div>
              <span>{this.state.message || "Click to Start."}</span>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
