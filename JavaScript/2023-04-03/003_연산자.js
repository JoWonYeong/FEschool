// 할당연산
// 단항연산
// 증감연산
// 단락회로평가
// 3항 연산자
// 드모르간 법칙
// nullish 연산자
// 햇갈리는 연산 모음

// ========== 할당연산 ==========
let x = 10;
x = x + 10;
x += 10;

// ========== 단항연산 ==========
console.log(-2);
console.log(-(-2));
console.log(+-2);
console.log(+(+2));
console.log(+(+'2'));

// ========== 증감연산 ==========
// 실무에서는 이것을 구분하는 것이 큰 의미가 없습니다.
let num = 3;
++num; // 선증가 후할당
--num;
num++; // 선할당 후증가
num--;

// ========== 단락회로평가 ==========
// true : 1
// false : 0
// and(&&) : 곱
// or(||) : 합
// not(!) : 부정

console.log(!'false'); // false
console.log(!'0'); // false

console.log(!false); // true
console.log(!0); // true

console.log('abc' / 2); // NaN

console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);

let username = '';
username = username || '무명';
console.log(username);

// ========== 3항 연산자 ==========
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

// ========== 드모르간 법칙 ==========
// 드모르간 법칙을 이용해서 무조건 true가 되는 곳이나 무조건 false 가 되는 구간을 발견할 수 있습니다. 또는 조건을 단순화 할 수 있습니다.
const x1 = 0;
const y = 1;
console.log(!(x1 || y) === (!x1 && !y));
console.log(!(x1 && y) === (!x1 || !y));

// ========== nullish 연산자 ==========
let firstName = null;
let lastName = null;
// let nickName = null;
let nickName = '원영';

console.log(firstName ?? lastName ?? nickName ?? '익명사용자');

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

let height3 = '';
console.log(height3 || 'hello');
console.log(height3 ?? 'world');

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
