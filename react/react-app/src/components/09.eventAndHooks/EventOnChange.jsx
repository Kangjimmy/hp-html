import React, { useState } from 'react';

export default function EventOnChange() {
  const [message, setMessage] = useState('onChange 이벤트');
  return (
    <div>
      <h1>{message}</h1>
      <input
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <input
        type='text'
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
}
