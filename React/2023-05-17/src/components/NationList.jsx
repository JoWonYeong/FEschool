import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }

  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default function NationList() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/nations');

  // state 바껴서 계속 재렌더링돼서 무한호출됨
  // fetch('http://localhost:3001/nations')
  //   .then((response) => response.json())
  //   .then((json) => setNations(json));

  // then 이용
  // useEffect(() => {
  //   fetch('http://localhost:3001/nations')
  //     .then((response) => {
  //       // http 상태코드가 200번대가 아닌 경우
  //       if (!response.ok) {
  //         throw new Error('네트워크 응답에 문제가 있습니다.');
  //       }
  //       return response.json();
  //     })
  //     .then((json) => setNations(json))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // async, await 이용
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        // json도 promise 객체로 반환됨
        // 따라서 await 필요
        const json = await response.json();
        setNations(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  console.log(nations);

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름 : {nation.title}</h3>
              <p>인구 수 : {nation.population}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            setUrl('http://localhost:3001/nations?loc=europe');
          }}>
          유럽목록
        </button>
        <button
          onClick={() => {
            setUrl('http://localhost:3001/nations');
          }}>
          전체목록
        </button>
      </div>
    </Item>
  );
}
