// 클로저
// 클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 일컫습니다.

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

let 제곱2 = 제곱(2); // 2 제곱해주는 함수
let 제곱3 = 제곱(3); // 3 제곱해주는 함수
let 제곱4 = 제곱(4); // 4 제곱해주는 함수

제곱2(2);
제곱2(3);

// 같은 의미
제곱2(4);
console.log(제곱(2)(4));

// 함수를 리턴해줄 수 있음을 나타내는 예제
function 리턴함수() {
  function sum(a, b) {
    return a + b;
  }
  return sum;
}

let 합 = 리턴함수();
합(2, 3);

function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능
