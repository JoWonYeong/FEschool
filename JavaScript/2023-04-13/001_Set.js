// 집합, 합집합, 교집합, 차집합
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set('aabbbccccdd'); // 중복 제거
s.size;

회사게시판 = ['김', '김', '김', '김', '김', '김', '김', '이', '이', '이', '박'];
let 게시자 = new Set(회사게시판);

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
// 방법1
for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// 방법2
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}
