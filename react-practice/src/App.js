import './App.css';
import React, { useEffect, useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const click = () => {
        setCount(count + 1);
        if (count + 1 === 5) {
            alert('버튼을 5번 클릭했습니다!');
        }
    };

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={click}>증가</button>
        </div>
    );
};

export const HelloMessage = () => {
    const [name, setName] = useState('');
    const inputText = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <input type="text" onChange={inputText}></input>
            <h2>Hello, {name}!</h2>
        </div>
    );
};
export const ChangeMessage = () => {
    const [name, setName] = useState('Hello');
    const buttonPress = () => {
        setName('Goodbye');
        if (name === 'Goodbye') {
            setName('Hello');
        }
    };
    return (
        <div>
            <button onClick={buttonPress}>버튼</button>
            <h2> {name}, World!</h2>
        </div>
    );
};

export const Timer = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p>{time.toLocaleString()}</p>
        </div>
    );
};

export default function App() {
    const name = 'Yeon';
    const iflogin = true;
    const a = 2;
    const b = 1;
    const title = 'Hello World';

    return (
        <div className="App">
            <h1>Hello, {name}!</h1>
            <h1>{iflogin ? 'Welcome back!' : 'Please Log in'}</h1>
            <h1>{a > b && 'a가 b보다 큽니다'}</h1>
            <h1 class="title">{title}</h1>
            <div>
                <label for="id">아이디:</label>
                <input type="text" id="id"></input>
            </div>
            <div>
                <label for="password">비밀번호:</label>
                <input type="text" id="password"></input>
            </div>
            <Counter></Counter>
            <HelloMessage></HelloMessage>
            <Timer></Timer>
            <ChangeMessage></ChangeMessage>
        </div>
    );
}

// export default App;
