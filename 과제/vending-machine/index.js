// 품절 아닌 card 누르면 보라색 테두리
let card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', (e) => {
    let soldout = false;

    e.target.classList.forEach((a, i) => {
      if (a == 'soldout') {
        soldout = true;
        alert('품절 상품은 선택 불가능합니다.');
      }
    });

    if (e.target.nodeName != 'BUTTON') {
      if (e.target.nodeName == 'SPAN') {
        e.target.parentNode.parentNode.classList.add('purple');
      } else {
        e.target.parentNode.classList.add('purple');
      }
    } else {
      !soldout && e.target.classList.add('purple');
    }
  });
}
