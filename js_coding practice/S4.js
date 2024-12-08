// 1~100
console.log(Math.floor(Math.random() * 100)) + 1;
// 20~22
console.log(Math.floor(Math.random() * 3) + 20);

let today = new Date();
let todayDay = today.getDay();
if (todayDay === 0 || todayDay === 6) {
    console.log('행복한 주말입니다');
}
if (todayDay >= 1 || todayDay < 6) {
    console.log('평일입니다');
}
for (let elem of document.querySelectorAll('.pink')) {
    console.log(elem);
}
