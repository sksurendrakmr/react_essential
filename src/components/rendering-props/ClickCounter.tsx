import React from 'react'


export type CounterProps = {
    count: number;
    incrementCount: () => void;
}
export const ClickCounter = (props: CounterProps) => {
    return (
        <div onClick={props.incrementCount}>Clicked {props.count} times</div>
    )
}
