import React, { useReducer } from 'react';
import countReducer from './countReducer';
const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', icon: '🧨' });
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT', icon: '👓' });
        }}
      >
        down
      </button>
    </div>
  );
};

export default Counter;
