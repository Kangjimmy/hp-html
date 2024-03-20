import React, { useState } from 'react';

export default function Pr01_02() {
  const [num, setNum] = useState(0);
  function updateNum() {
    setNum((prev) => prev + 1);
  }
  function initNum() {
    setNum(0);
  }
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={updateNum} onMouseOut={initNum}>
        클릭
      </button>
    </div>
  );
}
