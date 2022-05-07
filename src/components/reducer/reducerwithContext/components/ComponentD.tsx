import React, { useContext } from 'react'
import { CountContext } from '../AppReducerWithContext'

export const ComponentD = () => {
    const { count, dispatch } = useContext(CountContext);
    return (
        <>
            <div>ComponentD - {count}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Dispatch</button>
        </>
    )
}
