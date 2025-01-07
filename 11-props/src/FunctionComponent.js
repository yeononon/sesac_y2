// function FunctionComponent() {
//     return <h1>여기는 Function Component</h1>;
// }
// export default FunctionComponent;

const FunctionComponent = (props) => {
    // #1. 변수 선언언
    const student = '춘향';
    // const { name, age } = props;
    // -const FunctionComponent = ({name, age})로 사용할 수 있음음
// 2) 화살표 함수 방식
const FunctionComponent = ({ name = 'Sally', age= 28}) => {

}
    return (
        <>
            <h1>여기는 Function Component</h1>
            <h2>Hello, {student}</h2>
            {/* #2. props 사용 */}
            <p>
                새로운 리더의 이름은 <b>{props.name}</b>
            </p>
        </>
    );
};
// #3.dufaultProps 설정
// -클래스 외부에서 설정
FunctionComponent.defaultProps = {
    name: 'Sally'
    age: 24
}
// #4. propTypes 설정
// -함수 외부에서 설정
FunctionComponent.propTypes = {
    name: PropTypes.string
    age: propTypes.1                     
}

export default FunctionComponent;

// 기본 매개개변수 문법 사용시 propTypes에서 isRequired 충돌
//  -보통 제거하는게 일반적임

