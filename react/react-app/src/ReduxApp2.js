import React from 'react';
import MemberInsert from './components/13.redux/MemberInsert';
import MemberTable from './components/13.redux/MemberTable';
import './css/Member.scss';

const ReduxApp2 = () => {
  return (
    <div className='memberContainer'>
      <MemberInsert />
      <MemberTable />
    </div>
  );
};

export default ReduxApp2;
