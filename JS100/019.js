// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요

const n = prompt('첫번째 숫자 + 공백 + 두번째 숫자 (제곱)').split(' ');
console.log(parseInt(n[0]) ** parseInt(n[1]));

// 답안
// console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
