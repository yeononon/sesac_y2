// 비동기처리방법 v.3
// async/await
async function f1() {
    return 1;
}
async function f2() {
    return Promise.resolve(1);
}
console.log(`fl() >> `, fl());
console.log(`f2() >> `, f2());

const f3 = async () => {
    return 3;
};

fl().then(function (result) {
    console.log('fl >>>', result);
});
f2().then(function (result) {
    console.log('f2 >>>', result);
});

// async/await은 세트다

function fetchFruits() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const fruits = ['🍎', '🍋'];
            resolve(fruits);
            reject(new Error('알 수 없는 에러 발생!'));
        }, 100);
    });
}

fetxhFruits()
    .then(function (f) {
        console.log(f);
    })
    .catch(function (err) {
        console.error(err);
    });

async function printItems() {
    try {
        const fruits = await fetchFruits();
    } catch (err) {}
}
