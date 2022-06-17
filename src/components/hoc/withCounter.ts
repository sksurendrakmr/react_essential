import React from "react";

/**
 * HOC accept a component as an argument.
 * HOC return a new component.
 *
 * A function that accepts a component and return an enhanced component.
 * A HOC pattern used to share common functionality between component without
 * having repeat the code.
 *
 * When we specify props in a component, the props is sent down to hoc
 * and not to the component.
 * Thus, the props is passed to the HOC but not to the component that is wrapped.
 * To Fix this issue, we need to pass the remaining props to the wrapped component
 * using spread operator.
 *
 * To pass a parameter to the hoc function.
 *
 */
const withCounter = (WrappedComponent: any, incrementNumber: number) => {
  class WithCounter extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
