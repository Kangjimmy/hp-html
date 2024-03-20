import React, { useState } from 'react';

export default function ChangeFont() {
  const [value, setValue] = useState('안녕하세요');
  const [fontSize, setFontSize] = useState('50px');

  return (
    <div>
      <div style={{ fontSize }}>{value}</div>
      <button onClick={() => setFontSize('100px')}>글자크기 변경</button>
    </div>
  );
}
