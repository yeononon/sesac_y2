// fetch()
// -JS의 내장 API, 비동기 HTTP 요청 처리하는 방법
// -Promise 기반으로 동작, 비동기 방식으로 데이터 요청하고 결과 반환함
// -직관적이고 사용하기 쉬움 : 매우 간단하고 직관적인 코드로 비동기 요청 보낼 수 있음

// fetxh('URL', {...})
// URL
// {...} : 옵션 객체
//          -요청의 설정 정의
//          -method/ headers/ body .. etc

// response 객체 info
// *status : HTTP 응답 상태 코드 (ex: 200, 404, 500 등)
// *statusText: HTTP 상태 메세지 문자열 (ex: "OK", "Not found")
// ok: 요청이 성공적으로 수행되었는지를 나타내는 boolean 값
// headers : 응답 헤더 나타내는 headers 객체체
//
//
//
// 상태

fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    console.log('Get response >>>', response);
    return response.json(); 
});
.then((data) => {
    console.log('Get Posts:', data)
}).catch((error) => {
    console.log('There has been a ')
})

// 2. post 요청
// 새로운 게시글 데이터 전송
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST'
    headers: {
        'Content-Type': 'application/Json',
        // 서버에 전달할 데이터 형식이 json으로 지정해주는것것
    },
    body: JSON.stringify({
        // JS 객체를 JSon 문자열로 변환 - 서버가 올바르게 해석 할 수 있도록록
        title: 'My New POST', 
        body: 'This is the content of my post',
        userId: 1,
    }),
    .then((response)=> {
        if(!)
    })
})

//  3. put 요청
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT'
    headers: {
        'Content-Type': 'application/Json',
        // 서버에 전달할 데이터 형식이 json으로 지정해주는것것
    },
    body: JSON.stringify({
        id: 1,
        title: 'Updated Post Title', 
        body: 'This is the updated content',
    }),
}).then((response) => response.json()).then((data) => {
    console.log('UPdated Post :', data)
})
.catch((err) => console.error(err))

// 4. delete 요청
// 게사글 ID 1 삭제제
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then((res)=> {
        if(res.ok) {
            console.log('삭제 성공')
        }else {
            console.error('삭제 실패 ㅠㅠ')
        }
    })
    .catch((error) =>console.error('Error:', error))

// 5. Fetch와 Async/AWait 사용하기
// 게시글 데이터 가져오기
async function getPosts() {
    try{
        const response = await fetch (
            'https://jsonplaceholder.typicode.com/posts'
        )
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Async Posts: ', data)
    } catch (err) {
    console.error(err)/
    }
}
getPosts();

// 쿼리스트링
// -URL에 추가되는 데이터
//  키와 쌍인 파라미터 데이터를 전달하는 구조
// *구문
// URL?key1=value1&key2=value2&key3=value3
// -URL : 기본 주소
// -? :쿼리스트링의 시작
// -key=value : 전달하고자 하는 데이터
// -&: 여러 개의 키-값 쌍 구분
// *구문
// 장: 간단하고 직관적적
// 단: 보안 취약, 데이터 길이 제한
fetch('')
    .then((response) => {

        if (!response.ok) {
            throw new Error('NEtwork ')
        }
    })
