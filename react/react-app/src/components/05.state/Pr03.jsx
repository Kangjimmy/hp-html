import React, { useState } from 'react';

export default function Pr03() {
  const [text, setText] = useState('안녕하세요');
  const setLoginText = () => {
    setText('로그인되었습니다.');
  };
  const setLogoutText = () => {
    setText('로그아웃되었습니다.');
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={setLoginText}>로그인</button>
      <button onClick={setLogoutText}>로그아웃</button>
    </div>
  );
}
