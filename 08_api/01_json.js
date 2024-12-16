const car = `{
    "model" : "IONIQ 5",
    "company" : "HYUNDAI",
    "year" : 2023,
    "options" : ["side mirror", "smart sensor"],
}`;
console, log(car);

// 역직렬화
const obj = JSON.parse(car);
console.log(obj);

console.log(obj.model);
console.log(obj.options);
console.log(obj.hello);

// 직렬화화
const json = JSON.stringify(obj);
console.log(json, typeof json);

// 문자열이므로
// .(dot)/[] 연산자를 이용해서 키 값에 접근이 불가능
console.log(json.model);
console.log(json.price);

console.log(json.split(''));
console.log(json.toUpperCase());
