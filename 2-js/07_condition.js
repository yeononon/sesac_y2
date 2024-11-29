let number = Number(prompt('나이를 입력하세요!'));

if (number >= 20) {
    console.log('성인');
} else if (number >= 17) {
    console.log('고등학생');
} else if (number >= 14) {
    console.log('중학생');
} else if (number >= 8) {
    console.log('초등학생');
} else {
    console.log('유아');
}

let a = 3;
switch (a) {
    case 1:
    case 2:
    case 3:
        console.log('a가 1~3이군요!');
        break;
    case 4:
        console.log('a가 4이군요!');
        break;
    case 5:
        console.log('a가 5이군요!');
        break;
    default:
        console.log('a가 무슨 값인지 모르겠습니다');
        break;
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

for (let i = 0; i < 10; i++) {
    console.log('안녕', i);
}

for (let i = 1; i < 6; i++) {
    console.log(i);
}
for (let i = 5; i > 0; i--) {
    console.log(i);
}

let n = 10;
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(i, sum);
}

let sum2 = 0;

for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        sum2 += i;
        console.log(i, sum2);
    }
}
console.log(sum2);
