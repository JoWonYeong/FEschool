// 이 문제는 실제로 입사문제로 사용되던 알고리즘 문제입니다.
// 배열이 하나 주어졌을때 [3,3,2,4,5,2,1,0,3];
// 함수를 만듭니다. 가장 먼저 반복되는 원소의 값을 반환합니다.

function solution1(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    }
    map.set(arr[i], 1);
  }

  return '반복되는 값 없음';
}

function solution2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return '반복되는 값 없음';
}
console.log(solution1([3, 2, 2, 4, 5, 2, 1, 0, 3]));
console.log(solution2([1, 2, 3]));
