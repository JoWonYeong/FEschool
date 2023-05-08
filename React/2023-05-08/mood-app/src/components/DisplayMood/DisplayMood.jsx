import React from 'react';
import './DisplayMood.css';

export default function DisplayMood({ mood }) {
  return (
    <div className='container'>
      {mood ? `기분이 : ${mood}` : '아직 선택하지 않았어요!'}
    </div>
  );
}
