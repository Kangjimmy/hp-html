import { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
function createA() {
  const todos = [];
  for (let i = 4; i < 3500; i++) {
    todos.push({
      id: i,
      text: `할일${i}`,
      status: false,
    });
  }
  return todos;
}
function App() {
  const initArr = [
    {
      id: 1,
      text: '리액트 기초 공부하기',
      status: true,
    },
    {
      id: 2,
      text: '포트폴리오 만들기',
      status: true,
    },
    {
      id: 3,
      text: '프로젝트 준비하기',
      status: false,
    },
  ];
  const [todos, setTodos] = useState(createA);

  const handleTodos = useCallback((text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      status: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);
  const removeItem = useCallback((deleted) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted));
  }, []);
  const updateHandler = useCallback(
    (updated) =>
      setTodos((prev) =>
        prev.map((prevTodo) =>
          prevTodo.id === updated.id ? updated : prevTodo
        )
      ),
    []
  );
  return (
    <TodoTemplate>
      <TodoInsert handleTodos={handleTodos} />
      <TodoList
        todos={todos}
        removeItem={removeItem}
        updateItem={updateHandler}
      />
    </TodoTemplate>
  );
}

export default App;
