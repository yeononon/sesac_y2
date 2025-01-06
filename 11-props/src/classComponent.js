// #8. proptypes 가져오기
import PropTypes from 'prop-types';
// 1)
// import React from 'react';
// class ClassComponent extends React.Component {}
// 2)
import React, { Component } from 'react';
// -> React 라이브러리 가져오기.
class ClassComponent extends Component {
    // state 필드(=속성성) 선언
    // student = '홍길동';
    // // 내부선언 속성은 this.속성명으로 접근근
    // static defaultProps = {
    //     place: '강동캠퍼스 (static)',
    // };

    // static PropTypes = {
    //     place: PropTypes.string,
    // };
    render() {
        // const
        // const leader = 'Damon';
        // // render 내부 변수니까 this. 안해도됨됨
        // console.log('props', this.props);

        // // #6. props 사용 2- 구조 분해 할당당
        // const { place } = this.props;

        return (
            <>
                {/* <h1>여기는 class Component</h1>
                <h2>Hello, {this.student} </h2>
                <h3>My name is {leader}</h3>
                {/* #5. props 사용 1 */}
                {/* <div>info : {this.props.place}</div> */}
                {/* #6.props 사용 2 */}
                {/* <div>info:{place}</div> */}
                {/* <h1>{{ text } && '이건 기본 text props입니다'}</h1> */}
            </>
        );
    }
}
// #7.Default Props (props 기본 값 설정)
// : 부모 컴포넌트에서 props 미전달시 기본 값으로 보여줄 props 설정
// 클래스 외부에서 설정
// ClassComponent.defaultProps = {
//     place: '강동캠퍼스',
// };
// #8. protypes
// -Props 타입 검사
ClassComponent.Proptypes = {
    // place: Proptypes.string,
    // text: propt,
    // 필수 설정
    // number: propt
};
// #8-2. proptypes
// -필드 형태로 설정

export default ClassComponent;
