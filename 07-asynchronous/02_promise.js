// 비동기처리 방법 v.2
// 1. promise
function promise1(flag) {
    // 실행함수(excutor)가 두 개의 콜백함수 (resolve, reject)를 받음음
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(`프로미스 이행(fulfilled) 상태! === 성공! ${flag}`);
        } else {
            reject(`프로미스 거절 상태! === 실패 ${flag}`);
        }
    });
}

// 2. promise를 소비하는 코드
//  소비코드
// promise1(5 > 3)
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// // 화살표 함수
// promise1(5 > 3)
//     .then((result) => console.log(result))
//     .catch((result) => console.log(result));

//     let product;
//     let price;

//     function goMart() {
//         console.log('마트에 가서 어떤 음료 살지 고민한다.');
//     }
//     function pickDrink(cb) {
//         return new Promise(function(resolve, reject))
//         setTimeout(function () {
//             console.log('고민 끝');
//             product = '사이다';
//             price = 3000;
//             cb(product, price);
//         }, 3000);
//     }

//     function pay(product, price) {
//         console.log(`상품명:${product}, 가격은 : ${price}`);
//     }
//     goMart();
//     pickDrink().then(pay).catch(nopay);

// -----------
// 프로미스 체이닝
// (4+3) * 2 - 1 연산
// => sub(mul(add(4, 3),2),1): add ->mul ->sub
// 1) 콜백함수 사용
function add(n1, n2, callback) {
    setTimeout(function () {
        const result = n1 + n2;
        callback(result);
    }, 1000);
}
function mul(n, callback) {
    setTimeout(function () {
        const result = n * 2;
        callback(result);
    }, 700);
}
function sub(n, callback) {
    setTimeout(function () {
        const result = n - 2;
        callback(result);
    }, 500);
}
add(4, 3, function (x) {
    console.log(x);
    mul(x, function (y) {
        console.log(y);
        sub(y, function (z) {
            console.log(z);
        });
    });
});

function add(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2;
            resolve(result);
        }, 700);
    });
}
