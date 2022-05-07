import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
const MAX_CLICK = 5;
/**
 * In order to show fallback from event handler, we need to call errorHandler()
 * from react-error-boundary
 */

export const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const handleError = useErrorHandler();

    const handleClick = () => {
        try {
            if (count === MAX_CLICK) {
                throw new Error('count exceeded to max click')
            } else {
                setCount((c) => c + 1)
            }
        } catch (error) {
            handleError(error);
            console.log("Click handler Error", error);
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Counter {count}</button>
        </div>
    )
}
