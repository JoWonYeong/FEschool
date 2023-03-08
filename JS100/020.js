// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const input = prompt('첫번째 숫자 + 공백 + 두번째 숫자 (몫과 나머지)').split(
  ' '
);
let output = `${Math.floor(parseInt(input[0]) / parseInt(input[1]))} ${
  parseInt(input[0]) % parseInt(input[1])
}`;
console.log(output);
