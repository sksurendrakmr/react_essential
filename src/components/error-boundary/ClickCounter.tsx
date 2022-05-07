import React, { useState } from 'react'

export const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>Counter {count}</button>
        </div>
    )
}
