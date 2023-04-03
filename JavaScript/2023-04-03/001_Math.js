console.log(parseInt('10abc')); // 10 ****
let n = 10.123123;
console.log(n.toFixed(3)); // ****

// Math ****
Math.abs(-10); // 절대값
Math.ceil(10.3); // 올림
Math.floor(10.3); // 내림
Math.round(10.5); // 반올림
Math.round(10.4); // 반올림
Math.sqrt(100); // square root, 루트

Math.PI; // 3.141592653589793
Math.min(1, 3, 5, 6, 7, 23, 9);
Math.max(1, 3, 5, 6, 7, 23, 9);

Math.min([1, 2, 3, 4, 5]); // 작동 안됩니다.
Math.min(...[1, 2, 3, 4, 5]); // '...' 전개 구문은 뒤에서 배웁니다.

// 0 이상 ~ 1 미만
Math.random();

// 1 ~ 10까지 난수 생성
parseInt(Math.random() * 10 + 1); // +1을 해주는 이유는 10을 포함하지 않기 때문에.

// math random 최솟값, 최댓값 지정
// 120 ~ 150
// (Math.random() * ( 최댓값 - 최솟값 )) + 최솟값

// 아래와 같이 있으나, 잘 사용되지 않는 메서드들이 있습니다.
Math.pow(2, 3); // 2 ** 3
