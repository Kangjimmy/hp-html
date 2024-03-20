import React, { useState } from 'react';

export default function SelectImage() {
  const selectArr = ['apple', 'banana', 'mango', 'watermelon'];
  const [select, setSelect] = useState('');
  const selectHandler = (e) => setSelect(e.target.value);
  return (
    <div>
      <h1>선택한 과일 {select}</h1>
      <select onChange={selectHandler} name='select' id='select'>
        {selectArr.map((item) => (
          <option value={`/images/${item}.webp`}>{item}</option>
        ))}
      </select>
      <img src={select} alt='과일사진' width='300px' height='300px' />
    </div>
  );
}
