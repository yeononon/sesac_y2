function multifly(a, b) {
    return a * b;
}
console.log(multifly(3, 4));

const square = function (n) {
    return n ** 2;
};

// function square2(n) {
//     n ** 2;
// }
console.log(square(4));

// 내장 메소드 part
// 1. 1~100 배열 만들기
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
}
// 합계 구하기
// 1)for
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += arr[i];
}
console.log(sum);

// 2)for of
let sum1 = 0;
for (let num of arr) {
    sum1 += num;
}
console.log(sum1);

// 3)forEach
let sum2 = 0;
arr.forEach((ber) => {
    sum2 += ber;
});
console.log(sum2);

// 2. 짝수 배열 만들기기
let arr1 = [];
for (let i = 0; i < 50; i++) {
    arr1.push((i + 1) * 2);
}
let sum4 = 0;
for (let i of arr1) {
    sum4 += i;
}
console.log(sum4);

console.log(arr);
console.log(arr1);

// 3. 배열에서 문자열 길이 출력하기
// 1) forEach
const fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.forEach((fruit) => {
//     console.log(fruit.length);
// });
const fruitList = document.getElementById('fruitList');

fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    console.log(li);
    li.addEventListener('click', () => {
        li.style.color = 'blue';
    });
    fruitList.appendChild(li);
});

// 2) for of
// const fruits1 = ['apple', 'banana', 'orange', 'grape'];
// for (let fruit1 of fruits) {
//     console.log(fruit1.length);
// }
// // 3) for
// const fruits2 = ['apple', 'banana', 'orange', 'grape'];
// for (let i = 0; i < fruits2.length; i++) {
//     console.log(fruits2[i].length);
// }

// 4. 이벤트리스너
// 1) 버튼 누르면 텍스트 변경경
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     if (button.textContent === '버튼') {
//         button.textContent = '버튼이 클릭됨!';
//     } else {
//         button.textContent = '버튼';
//     }
// });

// 2) 항목 추가/삭제
// 1-항목 추가 함수수
const commentList = document.getElementById('commentList');
const formText = document.querySelector('.formText');
const button = document.querySelector('button');

const addEvent = () => {
    button.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = formText.value;
        commentList.appendChild(li);
    });
};

addEvent();

// 콜백함수
const first = (callback) => {
    console.log('안녕하세요!');
    callback();
};
