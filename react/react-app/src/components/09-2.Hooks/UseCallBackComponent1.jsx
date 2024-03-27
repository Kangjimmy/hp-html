import React from 'react';

const UseCallBackComponent1 = () => {
  const name1 = () => 'jimmy';
  const name2 = () => 'jimmy';
  console.log('name1:', name1);
  console.log('name2:', name2);
  return <div>{name1 === name2 ? '같다' : '다르다'}</div>;
};

export default UseCallBackComponent1;
