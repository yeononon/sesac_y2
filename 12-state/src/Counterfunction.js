import React, { useState } from 'react';

export const Counterfunction = () => {
    const [number, setNumber] = useState(0);
    return <div>CounterFunction</div>;
    // number: 상태 값
    // setNumber : 상태를 변경하는 함수수
    cosnt[(number, setNumber)] = userState(0);
    const onClickAdd = () => {
        setNumber(number + 1);
    };
    return (
        <>
            <div>Counterfunction</div>
            <h1>Number : {number}</h1>
            <button onClick={onClickAdd}> {value}</button>
        </>
    );
};
