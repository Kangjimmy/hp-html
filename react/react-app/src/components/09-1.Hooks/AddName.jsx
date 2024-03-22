import React, { useEffect, useState } from 'react';

export default function AddName() {
  const [value, setValue] = useState('');
  const [lists, setLists] = useState([]);
  function handleValue(e) {
    setValue(e.target.value);
  }
  function addArr() {
    setLists((prev) => [...prev, value]);
    const c = document.querySelector('.inputText');
    c.value = '';
    c.focus();
  }

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ lists });
    return () => {
      console.log('clean up!!');
    };
  }, [lists]);
  return (
    <div>
      <input type='text' onChange={handleValue} className='inputText' />
      <button onClick={addArr}>추가</button>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
