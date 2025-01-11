import './App.css';
import React, { useEffect, useState, useRef } from 'react';

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

export const Map = () => {
    const scores = [45, 60, 70, 30, 85, 90, 40];
    const updatedScores = scores
        .map((score) => score + 5)
        .filter((score) => score >= 50);
    return (
        <div>
            <h1>updated Scores</h1>
            <ul>
                {updatedScores.map((score, index) => {
                    return <li key={index}>{score}</li>;
                })}
            </ul>
        </div>
    );
};

// export const Map2 = () => {
//     return <div>App</div>;
// };

export const Focus = () => {
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="여기에 입력하세요"
            ></input>
            <button onClick={handleFocus}>포커스 버튼</button>
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

export const Clock = () => {
    const [seconds, setSeconds] = useState(0);
    const timeRef = useRef(null);
    const startTimer = () => {
        if (timeRef.current) return;
        timeRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
        // setinetval(함수, 시간간)
        // 함수->setSeconds 함수
    };
    const stopTimer = () => {
        if (timeRef.current) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    };
    return (
        <div>
            <h1>타이머: {seconds}초</h1>
            <button>시작</button>
            <button>정지</button>
        </div>
    );
};

export const New = () => {
    // #1. 내용을 입력하면 보이게 (value랑 onChange 이용용)
    const [value, setValue] = useState('');
    const changeHandle = (e) => {
        setValue(e.target.value);
    };
    // #2. 내용 없을때 포커스 되도록
    const inputRef = useRef(null);
    const focusHandle = (e) => {
        e.preventDefault();
        if (!value) {
            inputRef.current.focus();
        } else {
            setValue('');
        }
    };
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={changeHandle}
                placeholder="내용을 입력하세요!"
            ></input>
            <button onClick={focusHandle}>버튼</button>
        </div>
    );
};

export const Practice3 = () => {
    // 내용 입력시 적용용
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');

    const writerInput = (e) => {
        setWriter(e.target.value);
    };
    const titleInput = (e) => {
        setTitle(e.target.value);
    };
    const inputRef = useRef(null);
    // 버튼 타입
    const buttonPress = () => {
        if (!writer || !title) {
            inputRef.current.focus();
        }
        // 버튼 눌렀을때 내용 새로고침
        else {
            setTitle('');
            setWriter('');
        }
    };
    return (
        <div>
            작성자:
            <input
                ref={inputRef}
                type="text"
                value={writer}
                onChange={writerInput}
            ></input>
            제목:
            <input
                ref={inputRef}
                type="text"
                value={title}
                onChange={titleInput}
            ></input>
            <button onClick={buttonPress}>작성</button>
        </div>
    );
};

export const LifeCycleFunc = () => {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const ChangeNumber = () => {
        setNumber(number + 1);
    };
    const ChangeState = () => {
        if (visible === false) {
            setVisible((visible) => !visible);
        } else {
            setVisible();
        }
    };

    return (
        <div>
            <button onClick={ChangeNumber}>Plus</button>
            <button onClick={ChangeState}>on/off</button>
        </div>
    );
};

export const useEffectFunc = () => {
    const fakePosts = [
        {
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
        },
        {
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
        },
        {
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
        },
        {
            id: 4,
            title: 'eum et est occaecati',
            body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
        },
        {
            id: 5,
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
        },
        {
            id: 6,
            title: 'dolorem eum magni eos aperiam quia',
            body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
        },
        {
            id: 7,
            title: 'magnam facilis autem',
            body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
        },
        {
            id: 8,
            title: 'dolorem dolore est ipsam',
            body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
        },
        {
            id: 9,
            title: 'nesciunt iure omnis dolorem tempora et accusantium',
            body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
        },
        {
            id: 10,
            title: 'optio molestias id quia eum',
            body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
        },
    ];
    return <div>App</div>;
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
            <Map></Map>
            <Focus></Focus>
            <New></New>
            <br></br>
            <br></br>

            <Practice3></Practice3>
            <LifeCycleFunc></LifeCycleFunc>
            {/* <div>
                이름:
                <input type="text"></input>
                이메일:
                <input type="text"></input>
                <button onClick={mapPractice}>등록</button>
            </div> */}
        </div>
    );
}

// export default App;
