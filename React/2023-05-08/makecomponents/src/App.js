import React, { useState } from 'react';
import BtnList from './components/BtnList';
import ShowFeel from './components/ShowFeel';

export default function App() {
  // state
  // 저장된 값이 변경되면 자동으로 재렌더링 돼서 html에 반영됨
  // const [변수명, 변수바꿀때쓸함수] = useState(변수안에저장할값)
  // 변수바꿀때쓸함수(바꿀값)

  // 자주 변경되는 html부분 state로 만들면 되겟쥬
  const [feel, setFeel] = useState('');
  return (
    <>
      <h1>오늘의 기분을 선택해주세요 ^_^</h1>
      <BtnList setFeel={setFeel} />
      <ShowFeel feel={feel} />
    </>
  );
}
