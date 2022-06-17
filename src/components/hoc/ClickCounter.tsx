import React, { Component } from "react";
import withCounter from "./withCounter";

type ClickCounterProps = {
  count: number;
  incrementCount: () => void;
};
class ClickCounter extends Component<ClickCounterProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 3);
