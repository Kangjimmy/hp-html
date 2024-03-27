import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import { changeAge, changeName } from '../../features/user/userSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>현재 카운터 값은 {count.value}입니다.</h1>
      <h1>이름 : {user.name}</h1>
      <h1>나이 : {user.age}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(100));
        }}
      >
        Amount
      </button>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        이름변경
      </button>
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        나이변경
      </button>
    </div>
  );
};

export default Counter;
