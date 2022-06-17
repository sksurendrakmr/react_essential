import React from 'react'
import { CounterProps } from './ClickCounter'

export const HoverCounter = (props: CounterProps) => {
    return (
        <div onMouseOver={props.incrementCount}>Hovered {props.count} times</div>
    )
}
