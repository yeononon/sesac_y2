import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
    todos: [],
};

const todoslice = createSlice({
    name: 'todos',
    InitialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text,
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});
// slice: 상태를 나눈 단위
// ex. userSlice(사용자 상태)/ productSlice(상품 상태)/ cartSlice(장바구니 상태태)
// createSlice: 이름, 초기상태, 리듀서함수(상태 변경 함수)

// 액션 생성하기
export const { addTodo, deleteTodo } = todoslice.actions;
// 리듀서 내보내기
export default todoslice.reducer;
