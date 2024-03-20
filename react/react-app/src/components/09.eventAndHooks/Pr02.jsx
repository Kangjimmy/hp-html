import React, { useState } from 'react';

export default function Pr02() {
  const valueArr = [
    { name: '서울', value: 'Seoul' },
    { name: '부산', value: 'Busan' },
    { name: '제주', value: 'Jeju' },
  ];
  const [selected, setSelected] = useState('');
  return (
    <div>
      <h1>라디오 버튼의 value를 출력</h1>
      {valueArr.map((item) => (
        <label htmlFor={item.value}>
          <input
            type='radio'
            name='region'
            id={item.value}
            value={item.value}
            onChange={() => setSelected(item.value)}
          />
          {item.name}
        </label>
      ))}{' '}
      <button onClick={() => alert(selected)}>출력</button>
    </div>
  );
}
