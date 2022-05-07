import React, { useReducer } from 'react'

const initialState = 0
type CountAction = { type: "increment" | "decrement" | "reset" }
const reducer = (state: number = initialState, action: CountAction): number => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}
