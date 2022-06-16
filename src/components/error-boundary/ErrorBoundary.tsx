import { Component, ErrorInfo } from 'react'

/**
 * This component to be an error boundary, we need to implement either getDerivedState
 * from error lifecycle method or componentDidCatch lifecycle method.
 */

/**
 * This way of implement Error Boundary will not display the fallback if the error
 * is coming from asynchronous and event handling and there are also other limitation.
 * Refer docs.
 * 
 * This is where, react-error-boundary library comes handy.
 * 
 * This library provides a wrapper component similar to our own error boundary component
 * but it simplifies the process and allows us to handle errors thrown from event handlers
 * and async events.
 */

type ErrorBoundaryProps = {
    children: React.ReactNode;
}

type ErrorBoundaryState = {
    hasError: boolean;
}
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    //indicate there is some error in our application.
    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errInfo: ErrorInfo) {
        //usually send the error message to logging service
        console.log('Logging', error.message, errInfo);

    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}