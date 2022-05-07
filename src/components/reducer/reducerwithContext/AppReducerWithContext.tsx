import React, { Dispatch, useReducer } from 'react'
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';

type CounterState = {
    count: number;
}
const initialState = {
    count: 0
}


type CountAction = { type: "increment" | "decrement" | "reset" }


const reducer = (state: CounterState = initialState, action: CountAction): CounterState => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

type CountContextType = CounterState & {
    dispatch: Dispatch<CountAction>;
}
export const CountContext = React.createContext({} as CountContextType);

export const AppReducerWithContext = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ count: state.count, dispatch }}>
            <ComponentA />
            <ComponentB />
        </CountContext.Provider>
    )
}
