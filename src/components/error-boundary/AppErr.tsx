import React from 'react'
import { ClickCounter } from './ClickCounter'
import { Person } from './Person'

/**
 * If App encounter any error in production, we will only white page.
 * White screen isn't the best feedback to the user of our broken application.
 * What would be nice is if we could capture the error and render a fallback UI.
 * 
 * React team make it possible with version 16 with introduction of error boundaries.
 */
export const AppErr = () => {
    const person = {
        firstName: 'Bruce',
        lastName: 'Wayne'
    }

    return (
        <div>
            <Person person={person} />
            <ClickCounter />
        </div>
    )
}
