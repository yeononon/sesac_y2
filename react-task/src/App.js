import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    // 상태변수랑 함수 정의하기
    const [text, setText] = useState('');
    // 상태변수랑 함수 관계 나타내기
    const textInput = (e) => {
        setText(e.target.value);
    };

    const [bg, setBg] = useState('red');
    const bgInput = (e) => {
        setBg(e.target.value);
    };

    const [color, setColor] = useState('black');
    const colorInput = (e) => {
        setColor(e.target.value);
    };

    const [fruit, setFruit] = useState('peach.png');
    const FruitInput = (e) => {
        setFruit(e.target.value);
    };
    return (
        <div>
            {/* 속성 선택 부분분 */}
            과일:
            <select onChange={FruitInput}>
                <option value="peach.png">복숭아</option>
                <option value="apple.png">사과</option>
                <option value="orange.png">오렌지</option>
            </select>
            배경색:
            <select onChange={bgInput}>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
            </select>
            글자색:
            <select onChange={colorInput}>
                <option value="black">검정</option>
                <option value="green">초록</option>
                <option value="red">빨강강</option>
            </select>
            내용:
            <input type="text" onChange={textInput}></input>
            {/* 표현 되는 부분분 */}
            <div>
                <h2 style={{ color: color, backgroundColor: bg }}>
                    이것은 {text}입니다
                </h2>
            </div>
            <div>
                <img src={fruit}></img>
            </div>
        </div>
    );
}

export default App;
