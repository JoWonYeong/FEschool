import React from 'react';
import './MenuListItem.css';

export default function MenuListItem({ moodEl, isSelected, setMood }) {
  const onItemclick = () => {
    setMood(moodEl);
  };

  const getBackgroundColor = () => {
    if (isSelected) {
      return 'skyblue';
    }
  };

  return (
    <li>
      <button
        className='btn-item'
        onClick={onItemclick}
        style={{ backgroundColor: getBackgroundColor() }}>
        기분이 : {moodEl}
      </button>
    </li>
  );
}
