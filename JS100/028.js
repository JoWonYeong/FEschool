// 문제28 : 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예시 입력
// Javascript
// 예시 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

const str = prompt('2-gram 문지열 입력').split('');
let result = '';

for (let i = 0; i < str.length - 1; i++) {
  result += `${str[i]} ${str[i + 1]}\n`;
}
console.log(result);
