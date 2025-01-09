const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    // #1. 폼 내용 가져오기
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('content').value;

    // #2. 새로운 표 가져오기
    // 변동가능성 있기에 let으로 쓰기기

    let tdWriter = document.createElement('td');
    let tdContent = document.createElement('td');
    let tdDate = document.createElement('td');

    // #3. 폼 내용과 새로운 표 연동
    tdWriter.textContent = writer;
    tdContent.textContent = content;
    let now = new Date();
    tdDate.textContent = now.toLocaleString();
    // tdDate.innerText = `${now.getFullYear()}-${
    //     now.getMonth() + 1
    // }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

    // #4. 테이블과 tr에 td 넣기
    let tr = document.createElement('tr');
    let table = document.querySelector('table');

    tr.append(tdWriter, tdContent, tdDate);
    table.appendChild(tr);

    // #5. 폼 초기화
    // 폼의 값을 초기화 하는 것보단 폼 자체를 초기화하기에
    // 변수명 사용하지 않기
    document.getElementById('writer').value = '';
    document.getElementById('content').value = '';
});
