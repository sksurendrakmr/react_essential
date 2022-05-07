import React, { useReducer } from 'react'


type CounterState = {
    count: number;
}
const initialState = {
    count: 0
}


type CountAction = { type: "increment" | "decrement" | "reset" }
type CountPayloadAction = {
    type: 'incrementby5' | 'decrementby5';
    payload: number;
}

type CombinedCountAction = CountAction | CountPayloadAction;

const reducer = (state: CounterState = initialState, action: CombinedCountAction): CounterState => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'incrementby5':
            return { ...state, count: state.count + action.payload }
        case 'decrementby5':
            return { ...state, count: state.count - action.payload }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CounterTwo = () => {
    const [value, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>{value.count}</div>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "incrementby5", payload: 5 })}>Increment By 5</button>
            <button onClick={() => dispatch({ type: "decrementby5", payload: 5 })}>Decrement By 5</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}
