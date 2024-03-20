import React, { useState } from 'react';

export default function Hello() {
  const [인사, 인사변경] = useState(['안녕하세요', '재미있는', '리액트']);
  return (
    <div>
      <h3>{인사[0]}</h3>
      <h3>{인사[1]}</h3>
      <h3>{인사[2]}</h3>
    </div>
  );
}
