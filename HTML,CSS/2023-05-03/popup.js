const body = document.querySelector('body');
const article = body.querySelector('.popup');
const openBtn = body.querySelector('.btn-open');
const closeBtn = article.querySelector('.btn-close');

const dim = document.querySelector('.dim');

// 첫번째 포커스 요소
const firstEl = article.querySelector('a');

function openPopup() {
  article.classList.add('active');
  body.classList.add('noScroll');
  firstEl.focus();
}

function closePopup() {
  article.classList.remove('active');
  body.classList.remove('noScroll');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

closeBtn.addEventListener('keydown', function (e) {
  if (!e.shiftKey && e.key === 'Tab') {
    // tab만 누름

    // 기본적으로 tab을 눌렀을 때 하는 역할 막음
    e.preventDefault();

    // 특정한 원하는 곳으로 탭 이동
    firstEl.focus();
  }
});

firstEl.addEventListener('keydown', function (e) {
  if (e.shiftKey && e.key === 'Tab') {
    // shift + tab 누름

    // 기본적으로 shift + tab을 눌렀을 때 하는 역할 막음
    e.preventDefault();

    // 특정한 원하는 곳으로 탭 이동
    closeBtn.focus();
  }
});

dim.addEventListener('click', closePopup);

article.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePopup();
});
