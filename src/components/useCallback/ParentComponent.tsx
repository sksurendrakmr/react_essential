import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

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
 * 
 * After wrapping the components with React.memo, the component will only
 * re-render only if there is a change in its props or state.
 * 
 * All function inside of a component re created each time the parent component
 * re-renders.
 * 
 * In JS, when dealing with function, we always have to consider reference equality.
 * As, even though two functions have exact same behaviour it does not they are equal 
 * to each other. 
 * 
 * So the functions before the re-render is different to the functions after the re-render.
 * 
 * Since function is a props to Button component, React.memo sees that the prop
 * has  change and will not prevent to re-render.
 * 
 * So we need to tell react, there is no need to create a new function
 * (here, incrementSalary function) when we update the age.
 * 
 * Here we can make use of useCallback hook.
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
