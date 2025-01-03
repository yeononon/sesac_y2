//
const colors = ['black', 'blue', 'red'];
const sayhi = function () {
    console.log('hi');
};
function sayName(name) {
    console.log('my name is' + name);
    sayhi();
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBornYear() {
        return new Date().getFullYear() - this.age;
    }
}

module.exports = {
    colors,
    sayName,
    Person,
};
