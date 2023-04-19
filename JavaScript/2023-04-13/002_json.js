// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.(문자열 => 객체)
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.(객체 => 문자열)

const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json);
console.log(obj1);

const json2 = '[1, 2, 3]';
const obj2 = JSON.parse(json);
console.log(obj2);

const json = { result: true, count: 42 };
const s = JSON.stringify(json);
console.log(s);

// 깊은 복사
let arr1 = [10, 20, 30];
let a = JSON.parse(JSON.stringify(arr1));
a[0] = 1000;

console.log(arr1);

// error
let arr2 = [10, 20, 30];
let a = JSON.parse(`${arr2}`);
a[0] = 1000;

console.log(arr2);
