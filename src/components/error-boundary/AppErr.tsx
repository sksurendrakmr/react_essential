import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ClickCounter } from './ClickCounter'
import { Fallback } from './Fallback'
import { Person } from './Person'

/**
 * If App encounter any error in production, we will only white page.
 * White screen isn't the best feedback to the user of our broken application.
 * What would be nice is if we could capture the error and render a fallback UI.
 * 
 * React team make it possible with version 16 with introduction of error boundaries.
 */

/**
 * ErrorBoundary component from react-error-boundary will accept two props
 *  1. FallbackComponent -> accept a component which should be render when there is an error
 *                          in our component tree.
 * 
 * 2. onError -> error handler
 */
export const AppErr = () => {
    const person = {
        firstName: 'Bruce',
        lastName: 'Wayne'
    }

    //this handler will automatically receives error and errorInfo
    const errorHandler = (error: any, errorInfo: any) => {
        console.log("Logging", error, errorInfo);
    }
    return (
        <div>
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                <Person person={person} />
                <ClickCounter />
            </ErrorBoundary>
        </div>
    )
}
