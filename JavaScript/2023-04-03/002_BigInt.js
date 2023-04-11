////////////

// BigInt
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 3년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야 합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

9007199254740991 + 1;
// 9007199254740992

9007199254740991 + 2;
// 9007199254740992

9007199254740991 + 3;
// 9007199254740994

9007199254740991 + 4;
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
9007199254740991n + 1n;
// 9007199254740992n

9007199254740991n + 2n;
// 9007199254740993n

9007199254740991n + 3n;
// 9007199254740994n

9007199254740991n + 4n;
// 9007199254740995n

BigInt(9007199254740991) + BigInt(1);
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2);
// 9007199254740993n

BigInt(9007199254740991) + BigInt(3);
// 9007199254740994n

BigInt(9007199254740991) + BigInt(4);
// 9007199254740995n

// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함