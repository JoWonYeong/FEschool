import React from 'react';
import styled, { css } from 'styled-components';

const Fcolor = css`
  color: white;
`;

const Border = css`
  border-radius: 20px;
`;

const BackColor1 = css`
  background-color: royalblue;
`;

const BackColor2 = css`
  background-color: lightgreen;
`;

const BtnBasic = css`
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;

const Btn1 = styled.button`
  ${BtnBasic}
  ${Fcolor}
${BackColor1}
`;
const Btn2 = styled.button`
  ${BtnBasic}
  ${Border}
${BackColor1}
`;
const Btn3 = styled.button`
  ${BtnBasic}
  ${Border}
  ${Fcolor}
${BackColor2}
`;

export default function App2() {
  return (
    <>
      <Btn1>버튼1</Btn1>
      <Btn2>버튼1</Btn2>
      <Btn3>버튼1</Btn3>
    </>
  );
}
