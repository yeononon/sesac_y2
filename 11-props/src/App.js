import logo from './logo.svg';
import './App.css';
import ClassComponent from './classComponent';

function App() {
    return (
        <div className="App">
            {/* <ClassComponent></ClassComponent>
            <hr />
            <ClassComponent place="새싹 강동캠퍼스"></ClassComponent> */}
            {/* <ClassComponent text="텍스트" valid="1"></ClassComponent> */}
            <hr />
            <FunctionComponent></FunctionComponent>
            <FunctionComponent name="john" age={30}></FunctionComponent>
            {/* 꼭 {} 대괄호로 감싸줘야함 */}
            <hr />
            {/* children- 단일 자식 요소 전달 */}
            <Button link="https://www.google.com">Google</Button>
            <Button></Button>
            <hr />
            <MultiChild>
                <b>다중 자식</b>
                <p>요소 전달</p>
            </MultiChild>
        </div>
    );
}

export default App;
