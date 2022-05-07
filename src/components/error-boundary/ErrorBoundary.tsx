import { Component } from 'react'

/**
 * This component to be an error boundary, we need to implement either getDerivedState
 * from error lifecycle method or componentDidCatch lifecycle method.
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

    componentDidCatch(error: any, errInfo: any) {
        //usually send the error message to logging service
        console.log('Logging', error, errInfo);

    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}