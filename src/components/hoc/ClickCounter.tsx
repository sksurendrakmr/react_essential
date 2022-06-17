import React, { Component } from "react";
import withCounter from "./withCounter";

export type CounterProps = {
  count: number;
  incrementCount: () => void;
};
class ClickCounter extends Component<CounterProps> {
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
