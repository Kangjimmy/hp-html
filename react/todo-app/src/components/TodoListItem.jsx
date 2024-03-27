import React from 'react';
import '../style/Common.scss';
import style from '../style/TodoListItem.module.scss';
import { FiTrash } from 'react-icons/fi';
import { memo } from 'react';
const TodoListItem = (props) => {
  const { item, removeItem, updateItem } = props;
  console.log('todoListItem rendering🙂');
  const deleteTodo = () => {
    removeItem(item.id);
  };
  const changeHandler = (e) => {
    const checked = e.target.checked ? true : false;
    updateItem({ ...item, status: checked });
  };

  return (
    <div className={style.itemBox}>
      <div className={style.checkBox}>
        <input
          type='checkbox'
          id={item.id}
          checked={item.status}
          onChange={changeHandler}
          className={style.input}
        />
        <label htmlFor={item.id} className={style.label}>
          {item.text}
        </label>
      </div>
      <button className={style.delBtn} onClick={deleteTodo}>
        <FiTrash />
      </button>
    </div>
  );
};

export default memo(TodoListItem);
