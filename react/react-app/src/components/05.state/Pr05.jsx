import React, { useState } from 'react';
import Pr05_UserID from './Pr05_UserID';
import Pr05_UserPW from './Pr05_UserPW';

export default function Pr05() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const idHandler = (id) => {
    setId(id);
  };
  const pwHandler = (pw) => {
    setPw(pw);
  };
  const isSameValue = () => {
    id === pw ? alert('로그인 성공') : alert('로그인 실패');
  };
  return (
    <div>
      <Pr05_UserID onChangeId={idHandler} />
      <Pr05_UserPW onChangePw={pwHandler} />
      <button onClick={isSameValue}>Login</button>
    </div>
  );
}
