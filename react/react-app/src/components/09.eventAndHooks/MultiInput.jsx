import React, { useState } from 'react';

export default function MultiInput() {
  const [form, setForm] = useState({ username: '', message: '' });
  function onChangeHandler(e) {
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
  }
  return (
    <div>
      <h1>사용자이름 : {form.username}</h1>
      <h1>내용 : {form.message}</h1>
      <input type='text' name='username' onChange={onChangeHandler} />
      <input type='text' name='message' onChange={onChangeHandler} />
    </div>
  );
}
