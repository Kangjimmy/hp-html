import React from 'react';
import '../style/Common.scss';
import style from '../style/TodoTemplate.module.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>일정관리</h1>
      {children}
    </div>
  );
};

export default TodoTemplate;
