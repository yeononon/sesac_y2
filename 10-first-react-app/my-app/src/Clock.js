//  컴포넌트 작성법
// 1. 함수 만들기
// 2. return ()안에 html 작성
// 3. <함수명><함수명> 쓰기 -- 호출 할 곳에 < 함수명 />도 가능능

// 언제 사용하면 좋은가?
// 1. 반복적인 html 축약 할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들 UI

function Clock() {
    return (
        <div className="clock-container">
            <h1> 현대 시간은 {new Date().toLocaleTimeString()}</h1>
            {/* tolocaltimestring()
            : 사용자 문화권에 맞는 시간 표기법으로 시간을 리턴턴 */}
        </div>
    );
}

export default Clock;
