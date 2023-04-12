// ========== roro기법 ==========

// 입력되는 아규먼트가 많은 함수의 경우
// 호출 하는 쪽에서 어떤 값이 들어가는지 알기 어려울 때 사용

function 로그인정보({
  회원등급 = 'Gold',
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = '1주일 이내 가능',
  소셜로그인여부 = true,
}) {
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

// 이렇게 넣어도 제 자리에 들어감
로그인정보({
  회원등급: 'Silver',
  소셜로그인여부: false, // 순서 바뀜
  백업: '3일 이내 가능', // 중간 값 생략
});

// ========== 재귀함수 ==========

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로도 표현 가능
// 실무에서는 반복문 사용, 알고리즘 문제에서는 간혹 사용(팰린드롬), (병합정렬, 퀵정렬)

// 1. factorial
function factorial(n) {
  if (n <= 1) {
    // 종료조건 없으면 무한반복입니다.
    return n;
  }
  return n * factorial(n - 1);
}

//                 return               최종값
// factorial(5)    5 * factorial(4)    5 * 24 == 120
// factorial(4)    4 * factorial(3)    4 * 6 == 24
// factorial(3)    3 * factorial(2)    3 * 2 == 6
// factorial(2)    2 * factorial(1)    2 * 1 == 2
// factorial(1)    1

// 누적합
// 수식 사용하는게 가장 효율적

// 재귀함수 - 비효율적
function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}
console.log(sigma(1000));

// 수식 사용
const n = 1000;
console.log((n * (n + 1)) / 2);

// 2. 문자열 뒤집는 것
// 재귀함수 예제가 있었는데 그냥 안봐도될듯.. 너무 비효율적

result = '';

for (const i of 'hello world') {
  result = result + i;
}
