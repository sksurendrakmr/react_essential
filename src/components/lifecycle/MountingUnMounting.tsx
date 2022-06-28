import React, { Component } from 'react'

type MountingUnMountingProps = {
    shouldChangeCountState: boolean;
};
type MountingUnMountingState = {
    count: number;
};

export default class MountingUnMounting extends Component<MountingUnMountingProps, MountingUnMountingState> {

    constructor(props: MountingUnMountingProps) {
        super(props);
        console.log("Constructor");
        this.state = {
            count: 0
        }

    }

    static getDerivedStateFromProps(props: MountingUnMountingProps, state: MountingUnMountingState) {
        console.log("getDerivedStateFromProps");
        //Either return null or object of component's state
        // props.shouldChangeCountState ? { count: 10 } : null;
        return null;
    }

    componentDidMount() {
        console.log("Component Did Mount");

    }


    //updating

    shouldComponentUpdate(nextProps: MountingUnMountingProps, nextState: MountingUnMountingState) {
        // return true
        return this.state.count < 5;
    }
    static getSnapshotBeforeUpdate(prevProps: MountingUnMountingProps, prevState: MountingUnMountingState) {
        // return null;
        return { scrollPosition: '152px' }
    }
    componentDidUpdate(prevProps: MountingUnMountingProps, prevState: MountingUnMountingState, snapShot: any) {
        console.log("Component Did update");
        console.log(snapShot);

    }

    render() {
        return (
            <div>MountingUnMounting</div>
        )
    }
}
