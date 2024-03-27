import React, { useReducer } from 'react';
import { pr01Reducer } from './pr01Reducer';
import '../../css/Hook3Pr01.scss';
const Pr01 = () => {
  const [state, dispatch] = useReducer(pr01Reducer, 0);
  return (
    <div className='pr01Container'>
      <h1>🎀새싹 햄버거 가게🎀</h1>
      <h1>지불할 금액 : {state}원</h1>
      <ul className='menus'>
        <li
          className='menu'
          onClick={() => {
            dispatch({ icon: '🍔', price: 4000 });
          }}
        >
          🍔
        </li>
        <li
          className='menu'
          onClick={() => {
            dispatch({ icon: '🍟', price: 2000 });
          }}
        >
          🍟
        </li>
        <li
          className='menu'
          onClick={() => {
            dispatch({ icon: '🥤', price: 1500 });
          }}
        >
          🥤
        </li>
      </ul>
    </div>
  );
};

export default Pr01;
