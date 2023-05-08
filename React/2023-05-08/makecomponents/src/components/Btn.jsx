import React from 'react';

export default function Btn({ txt, setFeel }) {
  return (
    <button
      onClick={() => {
        setFeel(txt);
      }}>
      기분이 : {txt}
    </button>
  );
}
