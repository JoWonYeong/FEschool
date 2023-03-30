let text1 = 'aa bb cc dd';
let text2 = 'aa-bb-cc-dd';
let text3 = 'aa,bb,cc,dd';
let text4 = 'aa,bb-cc-dd'; // 중급자 분들만 하세요.
// ['aa', 'bb', 'cc', 'dd']

console.log(text4.replace(',', '-').split('-'));

// trim() : 문자열 앞뒤 공백 잘라줌
//          중간의 공백은 제거하지 않음

let test = '          hello       world  ';
console.log(test.trim());
// hello       world

// 문자열 채우기
let str1 = '99';
console.log(str1.padStart(5, '0'));

let str2 = '99';
console.log(str1.padStart(5, '-'));
