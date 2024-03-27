import React, { useState } from 'react';

const Pr01 = () => {
  const [menu, setMenu] = useState(['초콜렛', '사탕']);
  const [text, setText] = useState('');
  const menuHandler = () => {
    setMenu((prev) => [text, ...prev]);
    setText('');
  };
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={menuHandler}>추가</button>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pr01;
