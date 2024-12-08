// 1부터 20까지 홀수 합 구하기

let sum = 0;
let i = 1;

while (i <= 20) {
    if (i % 2 === 1) {
        sum += i;
        console.log(sum, i);
    }
    i++;
}

// 10부터 1까지 역순으로 숫자 출력하기
let k = 10;

while (k > 0) {
    console.log(k);
    k--;
}

let number;
do {
    number = parseInt(prompt('숫자를 입력하세요 (10보다 큰 숫자)'));
} while (number <= 10);
