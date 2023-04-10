// ========== switch문 대신 사용 가능한 방법 ==========
const 요일 = new Date().getDay();
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

console.log(요일객체[요일]);

// default는 어떻게 처리?
const 요일2 = 10;

// 요일객체[요일2] : undefined

// 널리쉬 연산자 사용
console.log(요일객체[요일2] ?? 'hello');
// 단락평가 사용
console.log(요일객체[요일2] || 'hello');

// ========== 문자열 뒤집기 ==========
let s = 'hello world';
let result = '';
let count = 0;
while (count < s.length) {
  result = s[count] + result;
  count++;
}

console.log(result);

// ========== 객체 배열에서 특정값의 합 구하기 ==========
let user = [
  {
    _id: '642e3071c61a23c70ae6076b',
    index: 0,
    age: 31,
    name: 'Hicks Garza',
    gender: 'male',
  },
  {
    _id: '642e3071ecd6f90a87d64731',
    index: 1,
    age: 32,
    name: 'Ayers Harrington',
    gender: 'male',
  },
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    age: 39,
    name: 'Lamb Adams',
    gender: 'male',
  },
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    name: 'Lamb Adams',
    gender: 'male',
  },
];

user
  .map((v) => v.age)
  .filter((v) => !!v) // undefined 삭제
  .reduce((a, b) => a + b, 0);

// 참고사항
!!1; // true
!!-1; // true
!!0; // false
!!'hello'; // true
!!undefined; // false
