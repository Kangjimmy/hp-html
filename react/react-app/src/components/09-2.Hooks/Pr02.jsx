import React, { useEffect, useState } from 'react';

const Pr02 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const textHandler = (e) => {
    setText(e.target.value);
    console.log('text값이 변경 되었습니다.');
  };
  const countHandler = () => {
    setCount((prev) => prev + 1);
    console.log('count값이 변경 되었습니다.');
  };

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    return () => {
      console.log('청소');
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countHandler}>+1</button>
      <hr />
      <input type='text' onChange={textHandler} />
      <h1>{text}</h1>
    </div>
  );
};

export default Pr02;
