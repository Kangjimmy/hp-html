import React, { useState } from 'react';

export default function Pr01() {
  const [message, setMessage] = useState({ title: '제목', color: 'black' });
  function changeTitle(e) {
    setMessage({ title: e.target.value, color: 'red' });
  }
  return (
    <div>
      <h1 style={{ color: message.color }}>{message.title}</h1>
      <hr />
      <input
        type='text'
        placeholder='내용을 입력하세요'
        onChange={changeTitle}
      />
      <button onClick={() => alert(message.title)}>클릭</button>
    </div>
  );
}
