// 실무 팁(***)

let tip1 = [1, 2, 3, 4, 5];

// 배열의 손상없이 마지막 값 꺼내기
console.log(tip1[tip1.length - 1]);
console.log([...tip1].pop());

let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2); // 배열의 마지막 요소 삭제됨

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 다차원 배열에서 최솟값, 최댓값 찾기
// 다차원배열.flat(n) : 다차원 배열 n 만큼 풀어줌
// 2차원배열은 n 안줘도 됨
Math.max(...tip5.flat());

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

// 3차원 배열 n = 2 줘야 다 풀림
tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

// Array(10).fill(0)도 가능
const tip7 = new Array(10).fill(0);
// 문자열 하나씩 배열에 넣음
const tip8 = Array.from('hello world');

let tip9 = [1, 2, 3, 4, 5];
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // [1, 2, 1000, 3, 4, 5]
let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000); // [1, 2, 1000, 3, 4, 5]

const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);
