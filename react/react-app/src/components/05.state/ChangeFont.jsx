import React, { useState } from 'react';

export default function ChangeFont() {
  const [value, setValue] = useState('안녕하세요');
  const [fontPx, setFontPx] = useState('50px');
  const fstyle = { fontSize: fontPx };
  return (
    <div>
      <div style={fstyle}>{value}</div>
    </div>
  );
}
