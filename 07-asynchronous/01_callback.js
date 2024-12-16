// 1. setTimeout 함수 function, 시간간
console.log(1);
setTimeout(function () {
    console.log(2);
}, 2000);
console.log(3);
// -------------
// 2.비동기함수

let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료 살지 고민한다.');
}
function pickDrink() {
    setTimeout(function () {
        console.log('고민 끝');
        product = '사이다';
        price = 3000;
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명:${product}, 가격은 : ${price}`);
}

goMart();
pickDrink();
pay(product, price);
// 3. 비동기처리 방법
// : 콜백함수
// 콘솔로그 하나 찍고 3초후에 뜨는 것

let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료 살지 고민한다.');
}
function pickDrink(cb) {
    // 콜백함수 들어올 예정입니다다
    setTimeout(function () {
        console.log('고민 끝');
        product = '사이다';
        price = 3000;
        cb(product, price);
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명:${product}, 가격은 : ${price}`);
}
goMart();
pickDrink(pay);
// pay()이렇게 하면 안됨
// 4. 콜백 지옥
setTimeout(() => {
    let leaderList = '';
    let name = 'damon';
    if (!name) {
        console.log('리더 이름을 찾을 수 없습니다');
    } else {
        leaderList += name;
        console.log(leaderList);
    }
    setTimeout(() => {
        name = 'ari';
        if (!name) {
            console.log('리더 이름을 찾을 수 없습니다');
        } else {
            leaderList += name;
            console.log(leaderList);
        }
        setTimeout(() => {
            name = 'layra'; // 임의로 서버에서 가져온 척.
            if (!name) {
                console.log('리더 이름을 찾을 수 없습니다!');
            } else {
                leaderList += name;
                console.log(leaderList);
            }
        }, 1000);
    }, 1000);
}, 1000);
// setTimeout 안에 setTimeout이 들어가면서 코드가 점점 오른쪽으로 밀림
