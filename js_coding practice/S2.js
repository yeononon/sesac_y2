let i = 1;
let j = 1;

while (i < 10) {
    while (j < 10) {
        console.log(i, '×', j, '=', i * j);
        j++;
    }
    i++;
    j = 1;
}

let k = 0;
let sum = 0;

while (k <= 100) {
    if (k % 2 === 0 || k % 5 === 0) {
        sum += k;
    }
    k++;
}
console.log(sum);
