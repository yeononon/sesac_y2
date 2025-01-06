// 클래스 컴포넌트 state
// -내가 지은 파일명을 클래스 이름으로 가져감감
import React, { Component } from 'react';

export default class CounterClass extends Component {
    // React 16.3 이후 최신 버전 방법
    // *state란?
    // -컴포넌트의 상태를 관리할 수 있도록 도와주는 객체
    state = {
        count: 0,
    };
    render() {
        console.log('State : ', this.state);
        console.log('State : ', this.state.count);
        const { count } = this.state;
        return (
            <>
                <div>CounterClass</div>
                {/* #1. state 값 출력(구조분해 할당 X) */}
                <h1>Count : {this.state.count}</h1>
                {/* #1-2. state 값 출력(구조분해 할당 o) */}
                <h1>Count : {count}</h1>
                {/* #2. state 값 변경하기 */}
                {/* -직접 변경은 불가능능 */}
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    {' '}
                    + 1{' '}
                </button>
                <button
                    onClick={() => {
                        alert(count);
                    }}
                >
                    Alert Number
                </button>
            </>
        );
    }
}
