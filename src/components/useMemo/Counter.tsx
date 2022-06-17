import React, { useMemo, useState } from 'react'

/**
 * In real world problems, we might have some logic
 * that take considerable amount of time to execute.
 * 
 * Since every time the state updates, the component re-renders.
 * and When component re-render, isEven function is called again.
 * The function is slow and hence even we update counter 2, the UI
 * update is slow.
 * 
 * So we need a way to tell react not to recalculate
 * certain value which is not necessary.
 * 
 * In our case, we should not calculate whether counterOne is even or odd
 * when we change counterTwo values.
 * 
 * useMemo is a hook that will only recompute the cached value when
 * one of the dependencies has changed.
 * This optimisation heads to avoid expensive calculations
 * on every render.
 * 
 * In useMemo, in the first argument we pass in a function
 * whose return value needs to be cached.
 * 
 * useMemo return a cached value.
 * 
 * useCallback caches the provided function instance
 * itself whereas useMemo invokes the provided function and caches its result.
 */
export const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    const showIsEvenText = isEven ? 'Even' : 'Odd'
    return (
        <div>
            <button onClick={incrementOne}>Count 1 - {counterOne}</button>
            <span>{showIsEvenText}</span>
            <button onClick={incrementTwo}>Count 2 - {counterTwo}</button>
        </div>
    )
}
