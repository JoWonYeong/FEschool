// 메모들 로컬스토리지에서 뚝 가져와서 붙이는 함수생성
// 페이지 로딩될 때 실행
// 메모버튼 눌럿을 때 실행

const memoBtn = document.querySelector('.memo-btn');

let memo = JSON.parse(localStorage.getItem('memo'));
memo = memo ?? [];

memoBtn.addEventListener('click', function () {
  let newMemo = {};
  let memoTitle = document.querySelector('.memo-title').value;
  let memoContext = document.querySelector('.memo-context').value;
  let id = memo.length;
  let now = new Date();

  newMemo.id = id;
  newMemo.title = memoTitle;
  newMemo.context = memoContext;
  newMemo.date = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;
  memo.push(newMemo);

  localStorage.setItem('memo', JSON.stringify(memo));
});

function setMemo() {
  localStorage.getItem('memo');
}
