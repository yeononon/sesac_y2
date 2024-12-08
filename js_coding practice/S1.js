let number = Number(prompt('숫자를 입력하세요!'));

for (let i = 1; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        if (i <= number) {
            console.log(i);
        }
    }
}
