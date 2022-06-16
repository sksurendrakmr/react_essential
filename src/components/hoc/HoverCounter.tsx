import React, { Component } from 'react'

type HoverCounterProps = {}
type HoverCounterState = {
    count: number;
}

export class HoverCounter extends Component<HoverCounterProps, HoverCounterState> {
    constructor(props: HoverCounterProps) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h2>
            </div>
        )
    }
}
