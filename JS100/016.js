// # 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const input = prompt('문장 입력');
let output = '';

for (let i = input.length; i > 0; i--) {
  output += input.substring(i - 1, i);
}
console.log(output);

// 답안
/*
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');

// split() 메서드는 문자열을 배열로 만들어 반환하고,
// reverse() 메서드는 배열의 순서를 반전하며,
// join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
console.log(reverseString);
*/
