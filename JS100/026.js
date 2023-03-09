// 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다. 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

const planet = prompt('행성 한글로 입력');

let planets = new Map();

planets.set('수성', 'Mercury');
planets.set('금성', 'Venus');
planets.set('지구', 'Earth');
planets.set('화성', 'Mars');
planets.set('목성', 'Jupiter');
planets.set('토성', 'Saturn');
planets.set('천왕성', 'Uranus');
planets.set('해왕성', 'Neptune');

console.log(planets.get(planet));

// 답안
// 객체 형식으로 풀이
// const planets = {
//   수성: 'Mercury',
//   금성: 'Venus',
//   지구: 'Earth',
//   화성: 'Mars',
//   목성: 'Jupiter',
//   토성: 'Saturn',
//   천왕성: 'Uranus',
//   해왕성: 'Neptune',
// };

// const name = prompt('행성의 이름을 입력하세요.');

// console.log(planets[name]);
