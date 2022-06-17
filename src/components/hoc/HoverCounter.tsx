import React, { Component } from "react";
import { CounterProps } from "./ClickCounter";
import withCounter from "./withCounter";



class HoverCounter extends Component<CounterProps> {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>
                    Hovered {this.props.count} times
                </h2>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 4);
