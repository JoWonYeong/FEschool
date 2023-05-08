import React from 'react';
import './FragmentTest.css';

let list = [
  { no: 1, area: '대전', visited: false },
  { no: 2, area: '부산', visited: true },
  { no: 3, area: '목포', visited: false },
  { no: 4, area: '제주도', visited: false },
];

function MyComponent() {
  return (
    // fragment에 class 줘도 적용 안됨
    <React.Fragment className='my-fragment'>
      <h1>리엑트프레그먼트</h1>
      <p>테스트입니다!</p>
    </React.Fragment>
  );
}

function MyComponent2() {
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <h1>{item.area}</h1>
            <p>{item.visited ? '방문함' : '아직 안감'}</p>
          </>
        );
      })}
    </>
  );
}

function App() {
  return (
    <>
      <MyComponent />
      <MyComponent2 />
    </>
  );
}
export default App;
