import React, { useState } from "react";

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

type WithCounterProps = {
  count: number;
  incrementCount: () => void;
};
function withCounter<T extends WithCounterProps>(
  WrappedComponent: React.ComponentType<T>,
  incrementNumber: number
) {
  return (props: Omit<T, keyof WithCounterProps>) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + incrementNumber);
    };

    return <WrappedComponent {...(props as T)} count={count} incrementCount={incrementCount} />
  };
}

export default withCounter;
