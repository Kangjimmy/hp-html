import React, { useCallback } from 'react';
import style from '../style/TodoInsert.module.scss';
import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';
const TodoInsert = ({ handleTodos }) => {
  const [text, setText] = useState('');
  const addTodo = useCallback(
    (e) => {
      e.preventDefault();

      if (!text.trim()) {
        return;
      }

      handleTodos(text.trim());
      setText('');
    },
    [handleTodos, text]
  );
  const changeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <form onSubmit={addTodo}>
      <div className={style.container}>
        <input
          type='text'
          placeholder='일정을 입력하세요'
          className={style.insert}
          value={text}
          onChange={changeHandler}
        />
        <button className={style.btn}>
          <FiPlusCircle />
        </button>
      </div>
    </form>
  );
};

export default TodoInsert;
