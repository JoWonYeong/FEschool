// Array.from('') : 문자열을 한 문자씩 배열로 리턴
// filter : 조건에 해당하는것만 배열로 리턴
// reduce
// includes : 배열에 특정 값 포함여부 리턴
// join : 배열의 값들을 ()안의 문자 기준으로 붙여서 문자열로 리턴

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

// 의미 없는 값 _ 로 주는 것이 관습
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

// 모음 제거
Array.from('hello world').filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v));

// reduce
// arr.reduce((축적되는변수, 현재값) => 축적되는변수 + 현재값, 축적되는 변수의 초기값)
const arr3 = [1, 2, 3, 4, 5, 6];
// arr3 배열 전체 합 구하기
arr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// join
const arr4 = ['hello', 'world', 'wswy'];
arr4.join(' ');

// sort
const nums = [3, 1, 11, 8, 6];

// 오름차순
nums.sort((a, b) => a - b);
// 내림차순
nums.sort((a, b) => b - a);

// 실무사용코드
function sort(key) {
  if (click) {
    click = false;
    let sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    let sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}
