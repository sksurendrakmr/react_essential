import React, { Component } from "react";

type ClickCounterProps = {};
type ClickCounterState = {
  count: number;
};
export class ClickCounter extends Component<
  ClickCounterProps,
  ClickCounterState
> {
  constructor(props: ClickCounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
