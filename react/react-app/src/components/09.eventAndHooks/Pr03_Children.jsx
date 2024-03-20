import React, { useState } from 'react';

export default function Pr03_Children({ onCounter }) {
  const [counter, setCounter] = useState(0);
  function updateCounter() {
    onCounter();
    setCounter((prev) => prev + 1);
  }
  return (
    <div className='pr03_card'>
      <h2 className='pr03_card_count'>{counter}</h2>
      <button className='pr03_card_btn' onClick={updateCounter}>
        클릭
      </button>
    </div>
  );
}
