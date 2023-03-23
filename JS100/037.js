// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

function election(votes) {
  // let result = {};

  let result = new Map();
  let 결과발표 = '';

  votes.split(' ').forEach((a, i) => {
    if (result.has(a)) {
      for (let [key, value] of result) {
        if (key == a) {
          value += 1;
          result.set(key, value);
        }
      }
    } else {
      result.set(a, 1);
    }
  });

  let 당선인;
  let 표수 = -1;
  result.forEach(function (value, key) {
    if (표수 < value) {
      표수 = value;
      당선인 = key;
    }
  });
  결과발표 = `${당선인}(이)가 총 ${표수}표로 반장이 되었습니다.`;
  return 결과발표;
}

console.log(election('원범 원범 혜원 혜원 혜원 혜원 유진 유진'));

// 답안
/*
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = '';

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
*/
