import React, { useState } from 'react';

export default function TextArea() {
  const [text, setText] = useState('');
  const updateText = (e) => setText(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('내용:', text);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>내용: {text}</h1>
        <textarea
          name='textarea'
          id='textarea'
          cols='30'
          rows='3'
          onChange={updateText}
        ></textarea>
        <button>전송</button>
      </form>
    </div>
  );
}
