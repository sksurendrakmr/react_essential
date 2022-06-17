import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { HoverCounter } from "./HoverCounter";
// import { User } from './user'

/**
 * Why??
 * To share the functionality between react component.
 *
 * With render props pattern, we can use a props whose value is a function to
 * control what is actually render by the component.
 *
 * The term render prop refers to a technique for sharing code between react components
 * using a prop whose value is a function.
 */

export const AppRenderProps = () => {
    return (
        <div>
            AppRenderProps
            {/* <User render={(isLoggedIn) => isLoggedIn ? "Suri" : "Guest"} /> */}
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
};
