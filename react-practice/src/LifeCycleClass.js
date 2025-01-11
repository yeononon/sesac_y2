import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
    state = {
        number: 0,
        visible: true,
    };

    changeNumberState = () => {
        return this.setState({
            number: this.state.number + 1,
        });
    };

    changeVisibleState = () => {
        return this.setState({ visible: !this.state.visible });
    };
    render() {
        return (
            <>
                <div>부모 컴포넌트</div>
                <button onClick={this.changeNumberState}>Plus</button>
                <button onClick={this.changeVisibleState}>On / Off</button>
                {this.state.visible && (
                    <LifeCycleClassChild number={this.state.number} />
                )}
            </>
        );
    }
}
