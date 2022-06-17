import React, { useState } from 'react'

/**
 * 
 * The JSX is empty because the render props is going to control 
 * what will be render by this counter component.
 */

type CounterProps = {
    render: (count: number, incrementCount: () => void) => React.ReactNode;
}

export const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            {props.render(count, incrementCount)}
        </div>
    )
}
