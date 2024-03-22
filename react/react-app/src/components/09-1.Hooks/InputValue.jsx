import React, { useRef, useState } from 'react';

const InputValue = () => {
  const [name, setName] = useState('jimmy');
  const [age, setAge] = useState(28);

  const nameRef = useRef();
  const ageRef = useRef();
  function changeHandler() {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  }
  return (
    <div style={{ margin: '30px' }}>
      <h1>input 태그 value 값 지정</h1>
      이름 :{' '}
      <input
        type='text'
        value={name}
        ref={nameRef}
        onChange={(e) => {
          changeHandler();
        }}
      />
      나이 :{' '}
      <input
        type='text'
        value={age}
        ref={ageRef}
        onChange={(e) => {
          changeHandler();
        }}
      />
    </div>
  );
};

export default InputValue;
