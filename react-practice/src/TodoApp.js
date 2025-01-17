import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './todoslice';

export const TodoApp = () => {
    const [text, setText] = useState('');
    // useDispatch, useSelector 이용
    // -> todoSlice에서 액션과 리듀서 정의하고 여기서 사용하는거
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    // useDispatch랑 useSelector 차이
    // useDispatch: dispatch 함수 전달
    // dispatch: action->store
    // useSelector: 상태 중 필요한 부분만 select
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };
    const handleAddTodo = (id) => {
        dispatch(addTodo({ id }));
        setText('');
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
