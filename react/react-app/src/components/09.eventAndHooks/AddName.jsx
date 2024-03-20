import React, { useState } from 'react';

export default function AddName() {
  // useState가 걸린 대상이 변경되면
  // component 함수를 다시 실행되기 때문에
  // input이 바껴도 heavyWork가 실행된다... 문제가 될 수 있다.
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState('');
  const inputHanlder = (e) => {
    setInput(e.target.value);
  };
  const changeNames = () => {
    setNames((prev) => [...prev, input]);
  };
  function heavyWork() {
    for (let i = 0; i < 1500; i++) {
      console.log('무거운 작업 진행중 오래 걸림...');
    }
    return ['강인섭', '리액트'];
  }
  return (
    <div>
      <input type='text' onChange={inputHanlder} />
      <button onClick={changeNames}>추가</button>
      <div>
        {names.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
