import React, { useState } from 'react'
import { Button } from './Button'
import { Count } from './Count'
import { Title } from './Title'

/**
 * In this example, whenever we call any handleClick,
 * it will going to re-render all the components.
 * 
 * So to improve performance we have to restrict
 * re-renders to only components that need to re-render. 
 * 
 * For optimize this, we can make use of React.memo
 *
 * React.memo is a higher order component that will prevent
 * a functional component from being re-render if it's props
 * or state don't change.
 */

export const ParentComponent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = () => {
        setAge(age + 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
