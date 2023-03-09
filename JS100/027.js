// 문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

const name = prompt('이름1 + 공백 + 이름2 ..').split(' ');
const score = prompt('점수1 + 공백 + 점수2 ..').split(' ');

let result = {};

name.forEach((a, i) => {
  result[a] = parseInt(score[i]);
});

console.log(result);
