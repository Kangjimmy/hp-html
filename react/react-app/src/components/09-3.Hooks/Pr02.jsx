import React, { useReducer, useRef, useState } from 'react';
import { pr02Reducer } from './pr02Reducer';
import '../../css/Hook3Pr02.scss';

const Pr02 = () => {
  const [balance, dispatch] = useReducer(pr02Reducer, 0);
  const [money, setMoney] = useState(0);
  const handlerBalance = (position) => {
    dispatch({ position, money });
  };

  return (
    <div className='pr02Container'>
      <h1>👨‍💻 금액을 입력하세요.</h1>
      <label htmlFor='inputMoney' hidden>
        금액입력
      </label>
      <input
        type='number'
        id='inputMoney'
        step={1000}
        min={0}
        style={{ fontSize: '1.2rem' }}
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <h1>👨‍💻 입금 또는 출금 버튼을 클릭하세요.</h1>
      <ul className='bankMenus'>
        <li
          onClick={() => handlerBalance('Deposit')}
          className='bankMenu'
          style={{ backgroundColor: 'greenyellow' }}
        >
          입금
        </li>
        <li
          onClick={() => handlerBalance('Withdrawal')}
          className='bankMenu'
          style={{ backgroundColor: 'orange' }}
        >
          출금
        </li>
      </ul>
      <h1>💰현재 잔액: {balance}</h1>
    </div>
  );
};

export default Pr02;
