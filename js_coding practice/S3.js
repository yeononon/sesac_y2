let height = parseInt(prompt('높이를 입력하세요!'));

for (let i = 1; i <= height; i++) {
    let line = '';
    for (let k = 1; k <= height - i; k++) {
        line += ' ';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
    }
    console.log(line);
}
// height = 3일떄
// i = 1 / k = 1 => ' ' / j = 1 => ' *'
// i = 1 / k = 2 => ' * ' / j = 1 => ' * *'
// i = 2 / k = 1 => ' ' / j = 1 => ' **'
// i = 3 / ==> ''

const fruits = ['사과', '귤', '바나나'];
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[0]);

for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}

for (let a = 0; a < Array.length; a++) {
    console.log(arr[a]);
}
