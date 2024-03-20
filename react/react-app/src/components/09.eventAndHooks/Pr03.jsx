import React, { useState } from 'react';
import './Pr03.css';
import Pr03_Children from './Pr03_Children';

export default function Pr03() {
  const [count, setCount] = useState(0);
  const handlerCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className='container03'>
      <h1>Total Count : {count}</h1>
      <div className='container03_card'>
        <Pr03_Children onCounter={handlerCount} />
        <Pr03_Children onCounter={handlerCount} />
      </div>
    </div>
  );
}
