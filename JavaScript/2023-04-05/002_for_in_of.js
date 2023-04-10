// for..in
// for..of

let arr = [10, 20, 30, 40, 50];
let obj = { one: 10, two: 20 };

// ========== for..in ==========
// IE에서도 사용 가능
// 배열, 객체의 index, key에 접근

// 배열에서
for (const i in arr) {
  // i : arr의 index
  console.log(i); // 0, 1, 2, 3, 4
  console.log(arr[i]); // 10, 20, 30, 40, 50
}

// 객체에서
for (const i in obj) {
  // i : obj의 key
  console.log(i); // 'one', 'two'
  console.log(obj[i]); // 10, 20
}

for (const i in 'hello world') {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// ========== for..of ==========
// IE에서는 사용 불가
// 배열의 실제 값에 접근

for (const item of arr) {
  // item : arr의 값
  console.log(item); // 10, 20, 30, 40, 50
}

for (const item of obj) {
  // of 뒤에 iterable한 값이 나와야 합니다.
  // 객체는 순서 없어서 접근 불가
  console.log(item); // error: obj is not iterable
}

for (const item of 'hello world') {
  console.log(item); // 'h','e','l','l','o',' ','w','o','r','l','d'
}

// 배열의 합 구하기
let sum = 0;
for (const item of arr) {
  s += item; // 150
}
