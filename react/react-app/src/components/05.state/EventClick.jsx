import React, { useState } from 'react';

export default function EventClick() {
  const [value, setValue] = useState('안녕하세요');
  const printConsole = () => {
    console.log(value);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={printConsole}>클릭</button>
    </div>
  );
}
