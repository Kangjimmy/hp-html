import React, { useState } from 'react';

export default function Pr04() {
  const [color, setColor] = useState('black');
  const changeColor = (color) => {
    // console.log(color);
    setColor(color);
  };

  return (
    <div>
      <h1 style={{ color }}>글자색 바꾸기</h1>
      <button
        onClick={() => {
          changeColor('red');
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          changeColor('green');
        }}
      >
        초록색
      </button>
      <button
        onClick={() => {
          changeColor('blue');
        }}
      >
        파란색
      </button>
    </div>
  );
}
