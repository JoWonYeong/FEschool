// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

const result = nums.filter((a, i) => {
  return a != 400 && a != 500;
});

console.log(result);
