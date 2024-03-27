import React, { useState, useEffect, useRef } from 'react';

const Pr03 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
    console.log('랜더링 완료');
  });
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>랜더링 횟수 : {renderCount.current}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Pr03;
