import React, { useState } from 'react';

export default function NameForm() {
  const [value, setValue] = useState('');
  function submitHandler(e) {
    e.preventDefault();
    console.log(`입력값: ${value}`);
  }
  return (
    <div>
      <form onSubmit={submitHandler} action=''>
        <h1>내용: {value}</h1>
        <input
          type='text'
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>전송</button>
      </form>
    </div>
  );
}
