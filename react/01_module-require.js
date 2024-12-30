// 01_module 모듈을 불러와 사용
const add = require('./01_module');
console.log(add(5, 7));

// 01_module2 모듈을 불러와 사용
// const math = require('./01_module2');
// console.log(math);
// console.log(math.PI);
// console.log(math.E);
// console.log(math.add(3, 6));

const data = require('./01_module3');
console.log(data);

console.log('my name is' + Name);
console.log(data);

console.log(data.colors);

data.sayname('damon');

const Rei = new data.Person('레이', 20);
console.log(Rei);
console.log(Rei.getBornYear());

// *4
const { colors } = require('./01_module3');
console.log(colors);

// *5
// 01_module4의 모듈을 불러와 사용
// 바로 내보는 것 가져오기
const { sayhi2 } = require('./01_module4');
sayhi2();
