import React from 'react';
import Btn from './Btn';

export default function BtnList({ setFeel }) {
  return (
    <>
      <Btn txt={'조아요'} setFeel={setFeel}></Btn>
      <Btn txt={'정말 조아요'} setFeel={setFeel}></Btn>
      <Btn txt={'최고에요'} setFeel={setFeel}></Btn>
      <Btn txt={'미쳐씀!!!!'} setFeel={setFeel}></Btn>
    </>
  );
}
