import React, { Component } from "react";
import withCounter from "./withCounter";

type HoverCounterProps = {
    count: number;
    incrementCount: () => void;
};
type HoverCounterState = {
    count: number;
};

class HoverCounter extends Component<HoverCounterProps, HoverCounterState> {
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

export default withCounter(HoverCounter);
