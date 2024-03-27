import React from 'react';
import style from '../style/TodoList.module.scss';
import TodoListItem from './TodoListItem';
import { memo } from 'react';

const TodoList = (props) => {
  console.log('♥️ todoList!! rerender');
  const { todos, removeItem, updateItem } = props;
  return (
    <div className={style.listContainer}>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);
