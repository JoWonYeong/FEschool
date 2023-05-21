import React from 'react';
import { useMouseLocation } from '../hooks/useMouseLocation';

export default function TestBox() {
  const { x, y } = useMouseLocation();

  console.log(x, y);

  return (
    <>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: y > 200 ? 'royalblue' : 'hotpink',
        }}>
        TestBox
      </div>
    </>
  );
}
