// 1. ========== push ==========
// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

const arr = [1, 2, 3, 4, 5];

// 2. ========== pop ==========
arr.pop(); // 5
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
arr;
// (4) [1, 2, 3, 4]

// 3. ========== unshift ==========
// 배열의 앞에 값 추가
const myArray1 = ['사과', '바나나', '수박'];
myArray1.unshift('오이', '배');
console.log(myArray1);

// 4. ========== shift ==========
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ['사과', '바나나', '수박'];
myArray2.shift();
console.log(myArray2);

// 5. ========== splice ==========
// arr.splice(start, deleteCount, items)
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr3 = [1, 2, 3];
arr3.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr4 = [1, 2, 3];
arr4.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr5 = [1, 2, 3];
arr5.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

// 문제
// ||를 사용해서 답변해주세요.
const arr6 = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
arr6.splice(1, 0, ...x);
arr6.splice(7, 0, ...x);
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.

const arr7 = [10, 20, 30, 40, 50];
arr7.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr7); // [10, 20, 5, 40, 50]

const arr8 = [10, 20, 30, 40, 50];
arr8.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.
console.log(arr8); // [10, 20, 50]

const arr9 = [10, 20, 30, 40, 50];
arr9.splice(2); // 2번째 인덱스에서 끝까지 값 삭제
console.log(arr9); // [10, 20]

// ========== 6. slice ==========
// arr.slice(start, end)
// start 인덱스부터 end-1 인덱스까지 자름
// 원본 훼손 X

const myArray = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
console.log(myArray.slice(1, 4)); // ['banana', 'cherry', 'durian']
console.log(myArray); // ['apple', 'banana', 'cherry', 'durian', 'elderberry']
// 1부터 마지막까지 자름
myArray.slice(1); // ['banana', 'cherry', 'durian', 'elderberry']
// 0 부터 100 - 1까지 자름
myArray.slice(0, 100); // ['apple', 'banana', 'cherry', 'durian', 'elderberry']
