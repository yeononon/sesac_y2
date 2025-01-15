import './App.css';
import React, {
    useEffect,
    useState,
    useRef,
    useMemo,
    useCallback,
    createContext,
    useContext,
    useReducer,
} from 'react';
import { useForm } from 'react-hook-form';

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

export const UseEffectFunc = () => {
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
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setPosts(fakePosts);
        }, 2000);
    }, []);
    console.log(posts);
    return (
        <div>
            {posts.length === 0 ? (
                <p>Loading...</p>
            ) : (
                posts.map((post) => <p key={post.id}>{post.title}</p>)
            )}
        </div>
    );
};

export const Hooksfunc = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 홀수의 합 계산 함수
    const oddSum = useMemo(() => {
        return numbers
            .filter((num) => num % 2 !== 0)
            .reduce((acc, num) => acc + num, 0);
    }, [numbers]);
    return (
        <div>
            <h1>Odd sum:{oddSum}</h1>
        </div>
    );
};

export const Hooksfunc2 = () => {
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Anna', age: 22 },
        { name: 'Charlie', age: 35 },
    ];
    const ageSum = useMemo(() => {
        return people
            .filter((person) => person.name.startsWith('A'))
            .reduce((acc, person) => {});
    });
    return (
        <div>
            <h1>Age sum:{ageSum}</h1>
        </div>
    );
};

// 1. Context 생성
const ThemeContext = createContext();

export const ThemeProvider = () => {
    const [theme, setTheme] = useState('light'); // 초기 테마 설정

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // 테마 토글 함수
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeToggler /> {/* 테마 변경 버튼 */}
        </ThemeContext.Provider>
    );
};

export const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Context에서 값을 가져옴

    return (
        <div>
            <h1>The current theme is {theme}</h1> {/* 현재 테마 표시 */}
            <button onClick={toggleTheme}>Toggle Theme</button>{' '}
            {/* 테마 변경 버튼 */}
        </div>
    );
};

export const ProductFilter = () => {
    // 상품 가격 제한 상태 관리

    const products = [
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 50 },
        { name: 'Product C', price: 70 },
    ];
    // 값 입력창 만들기
    const [priceLimit, setPriceLimit] = useState('');
    const inputPrice = (e) => {
        setPriceLimit(e.target.value);
    };
    // 입력된 값으로 필터링 하기기
    const filteredProducts = useMemo(() => {
        // 여기에 필터링 로직 작성
        //     return products.filter(prc=> priceLimit > prc)
        //   }, [products]);
        // 숫자니까 숫자로 바꿔주는 과정을 한번 더 거쳐야 함함
        const limit = parseFloat(priceLimit);
        // parseFloat/parseInt/Number/string/tostring/object
        return products.filter((prc) => limit > prc.price);
    }, [priceLimit, products]);

    return (
        <div>
            <h2>Product Filter</h2>
            <input
                type="number"
                value={priceLimit}
                onChange={inputPrice}
                // value랑 onChang 구분해서 쓰기, onChange는 값 입력에 매우 필수
                placeholder="Enter price limit"
            />
            <ul>
                {filteredProducts.map((product, index) => {
                    return (
                        <li key={index}>
                            {product.name}-${product.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
];

const ShoppingCartApp = () => {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback(
        (product) => {
            // prev.이전 상태도 적어줘야 함
            setCart((prev) => [...prev, product]);
        },
        [
            /* 의존성 배열 */
        ]
    );

    const removeFromCart = useCallback((productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
        // 장바구니에서 상품 제거 로직 작성
    }, []);

    // addToCart 참조값 변경 여부 확인 [useEffect]

    // removeFromCart 참조값 변경 여부 확인 [useEffect]

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            {product.name}
                            <button onClick={() => addToCart(product)}>
                                Add to cart
                            </button>
                        </li>
                    );
                })}
            </ul>
            <h2>Shopping Cart</h2>
            <ul>
                {/* cart.map을 해야함 */}
                {cart.map((product) => {
                    return (
                        <li key={product.id}>
                            {product.name}
                            <button onClick={() => removeFromCart(product.id)}>
                                {/* id 기준으로 배열 변경하기에(prodct.id 붙여야 함) */}
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};
export const Todofunc = () => {
    const [input, setInput] = useState('');
    const [todos, dispatch] = useReducer(todoReducer, []);
    const handleAdd = () => {
        dispatch({ type: 'add', payload: input });
        setInput('');
        // 입력초기화화
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 추가하세요"
                value={input}
            ></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() =>
                                dispatch({ type: 'delete', payload: todo.id })
                            }
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const UserContext = createContext();

export const Initial = () => {
    const [user, setUser] = useState({ name: 'Yeon', age: 30 });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <UserProfile></UserProfile>
            <UpdateUSer></UpdateUSer>
        </UserContext.Provider>
    );
};
export const UserProfile = () => {
    const { user, age } = useContext(UserContext);
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};
export const UpdateUSer = () => {
    const { user, setUser } = useContext(UserContext);

    // /useState 말고 useContext
    const inputUser = (e) => {
        return setUser({ ...user, name: e.target.value });
    };
    const inputAge = (e) => {
        return setUser({ ...user, age: e.target.value });
    };
    return (
        <div>
            <h2>User Information</h2>
            <input
                type="text"
                onChange={inputUser}
                placeholder="이름을 입력해주세요"
            ></input>
            <br></br>
            <input
                type="text"
                onChange={inputAge}
                placeholder="나이를 입력해주세요"
            ></input>
        </div>
    );
};

// useContext 생성 및 Provider 작성
const NameContext = createContext();

export const DisplayName = () => {
    // 작성해야 할 부분 (useContext로 이름 상태 가져오기)
    const { name, setName } = useContext(NameContext);

    return <h1>Hello, {name || 'Guest'}!</h1>;
};

export const NameInput = () => {
    // 작성해야 할 부분 (useContext로 setName 가져오기)
    const { setName } = useContext(NameContext);

    return (
        <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
    );
};

export const Initial2 = () => {
    const [name, setName] = useState('Guest');
    // useState는 대괄호 주의**********
    return (
        // 작성해야 할 부분
        <NameContext.Provider value={{ name, setName }}>
            <DisplayName></DisplayName>
            <NameInput></NameInput>
        </NameContext.Provider>
    );
};
// 1/15. React Hook Form 수업

export const BasicForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // formState errors: 유효성 검사
        watch,
    } = useForm();
    // #1. register: input이랑 연결
    // #2. handleSubmit: 제출을 처리한 부분
    // #3. watch: 특정 필드 변화를 실시간으로 감지
    // #4. formState: 폼 상태 객체
    // #4-1. errors : 유효성 검사 에러
    //       isDirty : 폼이 수정 되었는지 여부
    //       isSubmitting : 모든 필드가 유효한지 여부 (제출 시작 : ture / 제출 완료 : false)
    //       isSubmitted : 폼이 한 번이라도 제출되었는지 여부.

    const onSubmit = (data) => {
        console.log('폼 제출 성공', data);
        alert('Form submitted');
    };
    const onError = (err) => {
        console.log('폼 제출 실패', err);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label>Name:</label>
                <input
                    id="userName"
                    {...register('name', {
                        required: '이름을 입력해주세요요',
                        minLength: {
                            value: 2,
                            message: '최소 2글자를 입력해주세요',
                        },
                    })}
                    // register(필드명) <필수>
                    // required: 필수 여부
                    // pattern: /^\S+@\S+$/
                    // min, max length: 최대, 최소 길이
                    // {errors.userName?.message}
                    // errors: 유효성 검사가 실패한 경우에만 오류 메세지가 저장됨
                    // ?: 앞에 있는 요소가 있는지 없는지 확인하는 연산자 / 없을 경우 undefined 반환환
                ></input>
                <br></br>
                <label>Email:</label>
                <input
                    {...register('email', {
                        required: '이메일을 입력해주세요요',
                        validate: (v) =>
                            v.includes('@') || '이메일 형태로 입력해주세요',
                    })}
                />
                <br></br>
                <label>Phone:</label>
                <input
                    {...register('phone', {
                        required: '전화번호를 입력해주세요',
                    })}
                ></input>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export const SForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onsubmit = (data) => {
        console.log('제출되었습니다', data);
        alert('폼이 제출되었습니다');
    };
    const onError = (err) => {
        console.log('오류입니다', err);
    };

    return (
        <form onSubmit={handleSubmit(onsubmit, onError)}>
            <div>
                <label>이름:</label>
                <input
                    {...register('name', {
                        required: '이름은 필수 항목입니다다',
                    })}
                ></input>
                {errors.name?.message}
                <br></br>
                <label>나이:</label>
                <input
                    {...register('age', {
                        required: '나이를를 입력해주세요',
                        min: {
                            value: 0,
                            message: '0 이상의 숫자만 입력가능합니다',
                        },
                    })}
                ></input>
                {errors.age?.message}
                <button type="submit">제출</button>
            </div>
        </form>
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
            <Map></Map>
            <Focus></Focus>
            <New></New>
            <br></br>
            <br></br>

            <Practice3></Practice3>
            <LifeCycleFunc></LifeCycleFunc>
            <UseEffectFunc></UseEffectFunc>
            <Hooksfunc></Hooksfunc>
            <ProductFilter></ProductFilter>
            <ShoppingCartApp></ShoppingCartApp>
            <ThemeProvider></ThemeProvider>
            <Initial></Initial>
            <Todofunc></Todofunc>
            <Initial2></Initial2>
            <BasicForm></BasicForm>
            <SForm></SForm>
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
