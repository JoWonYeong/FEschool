// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다.)
// map은 forEach와 다르게 새로운 배열을 생성합니다.
// 따라서 return 값이 있어야함

const arr = [1, 2, 3];
arr.map(function (item, index) {
  return item ** 2;
});

arr.map(function (x) {
  return x ** 2;
});

arr.map((x) => x ** 2);

const arr2 = Array(100).fill(0);
// 같은 코드 1
// [0, ~, 99] 배열 리턴
// 화살표 함수 뒤에 바로 리턴값만 오는경우만 {중괄호, 리턴}없이 사용 가능
arr2.map((v, i) => i);

// 같은 코드 2
// [0, ~, 99] 배열 리턴
arr2.map(function (v, i) {
  return i;
});

// 같은 코드 3
// [0, ~, 99] 배열 리턴
function returnIndex(v, i) {
  return i;
}
arr2.map(returnIndex);

// 같은 코드 4
// [0, ~, 99] 배열 리턴
// 화살표함수 뒤의 값이 두줄 이상 or {중괄호}를 쓸 때 리턴값 꼭 있어야 함
arr2.map((v, i) => {
  return i;
});
