import React from "react";

/**
 * HOC accept a component as an argument.
 * HOC return a new component.
 *
 * A function that accepts a component and return an enhanced component.
 */
const withCounter = (WrappedComponent: any) => {
  class WithCounter extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
