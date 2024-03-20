import React, { useState } from 'react';

export default function ChangeValue() {
  const [value, setValue] = useState('안녕하세요');
  const changeValue = () => {
    setValue('반가워요');
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={changeValue}>클릭</button>
    </div>
  );
}
