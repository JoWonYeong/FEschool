let card = document.querySelectorAll('.card');
let vending1_obtained = document.querySelector('.vending1-obtained');
let vending2_obtained = document.querySelector('.vending2-obtained');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', (e) => {
    let soldout = false;
    // card_target : 눌린 <button>
    let card_target;

    e.target.classList.forEach((a, i) => {
      if (a == 'soldout') {
        soldout = true;
        alert('품절 상품은 선택 불가능합니다.');
      }
    });

    // 품절 아닌 card 누르면
    if (!soldout) {
      //  1. 보라색 테두리쳐줌
      if (e.target.nodeName != 'BUTTON') {
        if (e.target.parentNode.nodeName == 'BUTTON') {
          card_target = e.target.parentNode;
          card_target.classList.add('purple');
        } else {
          card_target = e.target.parentNode.parentNode;
          card_target.classList.add('purple');
        }
      } else {
        card_target = e.target;
        card_target.classList.add('purple');
      }
      // ====================================================

      // 2. 변수 설정
      // 이미지 url
      let img_url = card_target.childNodes[1].attributes[0].value;
      // 음료 이름
      let menu_name = card_target.childNodes[3].innerText;
      // 음료 가격
      let menu_price = parseInt(
        card_target.childNodes[5].childNodes[0].innerText
      );

      // ====================================================

      // 2. 장바구니 추가
      if (card_target.classList.value.search('selected') < 0) {
        // 처음 누르는 경우 (.selected 없는 경우)
        // <button>에 .selected 추가
        card_target.classList.add('selected');

        // 1. <img> 생성
        let obtained_element_img = document.createElement('img');
        obtained_element_img.classList.add('obtained-element-img');
        obtained_element_img.setAttribute('src', img_url);
        obtained_element_img.setAttribute('alt', menu_name);

        // 2. <span class='obtained_element_name'> 생성
        let obtained_element_name = document.createElement('span');
        obtained_element_name.classList.add('obtained-element-name');
        obtained_element_name.innerHTML = menu_name;

        // 3. <span> 생성해서 1, 2 붙이기
        let span1 = document.createElement('span');
        span1.appendChild(obtained_element_img);
        span1.appendChild(obtained_element_name);

        // 4. <span class='obtained-element-count'> 생성
        let obtained_element_count = document.createElement('span');
        obtained_element_count.classList.add('obtained-element-count');
        obtained_element_count.innerText = '1';

        // 5. <div class='obtained-element'> 생성해서 3, 4 붙이기
        let obtained_element = document.createElement('div');
        obtained_element.classList.add('obtained-element');
        obtained_element.appendChild(span1);
        obtained_element.appendChild(obtained_element_count);

        vending1_obtained.appendChild(obtained_element);
      } else {
        // 이미 눌러진 경우 (.selected 있는 경우)
        vending1_obtained
          .querySelectorAll('.obtained-element-name')
          .forEach((a, i) => {
            if (a.innerText == menu_name) {
              a.parentNode.nextSibling.innerHTML =
                parseInt(a.parentNode.nextSibling.innerText) + 1;
            }
          });
      }
    }
  });
}
