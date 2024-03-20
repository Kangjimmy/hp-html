import React, { useState } from 'react';

export default function Select() {
  const [value, setValue] = useState('banana');
  const valueHandler = (e) => setValue(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('선택한 과일 ->', value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>선택한 과일 : {value}</h1>
        <select name='select' id='select' value={value} onChange={valueHandler}>
          <option value='apple'>사과</option>
          <option value='watermelon'>수박</option>
          <option value='banana'>바나나</option>
          <option value='mango'>망고</option>
        </select>
        <button>전송</button>
      </form>
    </div>
  );
}
